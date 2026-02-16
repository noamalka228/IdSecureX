"use client";

import React, { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Tabs,
    Tab,
    Button,
    Stack,
    TextField
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/he';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('he');

interface InputState {
    realDate: Dayjs | null;
    realTime: Dayjs | null;
    dvrDate: Dayjs | null;
    dvrTime: Dayjs | null;
    incidentDate: Dayjs | null;
    incidentTime: Dayjs | null;
}

const DvrCalculator = () => {
    const [currentTime, setCurrentTime] = useState<string>('');
    const [tabValue, setTabValue] = useState(0);
    const [inputs, setInputs] = useState<InputState>({
        realDate: null,
        realTime: null,
        dvrDate: null,
        dvrTime: null,
        incidentDate: null,
        incidentTime: null,
    });
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [result, setResult] = useState<{ type: 'diff' | 'incident'; content: string } | null>(null);

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
        setResult(null);
        setErrors({});
    };

    const handleDateChange = (name: keyof InputState, value: Dayjs | null) => {
        setInputs((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const validateInputs = () => {
        const requiredFields = ['realDate', 'realTime', 'dvrDate', 'dvrTime'];
        if (tabValue === 0) {
            requiredFields.push('incidentDate', 'incidentTime');
        }

        const newErrors: { [key: string]: boolean } = {};
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!inputs[field as keyof InputState]) {
                newErrors[field] = true;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const formatTimeDiffText = (diffInMs: number) => {
        const diffInSeconds = Math.floor(Math.abs(diffInMs) / 1000);
        const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
        const months = Math.floor((diffInSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30));
        const days = Math.floor((diffInSeconds % (3600 * 24 * 30)) / (3600 * 24));
        const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        let diffFromRealTime = diffInMs > 0 ? "פחות מזמן אמת." : "יותר מזמן אמת.";

        return `${years} שנים, ${months} חודשים, ${days} ימים, ${hours} שעות, ${minutes} דקות, ${seconds} שניות ` + diffFromRealTime;
    };

    const calculate = () => {
        if (!validateInputs()) return;

        const { realDate, realTime, dvrDate, dvrTime } = inputs;

        if (!realDate || !realTime || !dvrDate || !dvrTime) return;

        // Combine Date and Time
        const realDateTime = realDate
            .hour(realTime.hour())
            .minute(realTime.minute())
            .second(realTime.second());

        const dvrDateTime = dvrDate
            .hour(dvrTime.hour())
            .minute(dvrTime.minute())
            .second(dvrTime.second());

        const timeDiff = realDateTime.diff(dvrDateTime);

        if (tabValue === 1) { // Time Diff Calculation
            setResult({ type: 'diff', content: formatTimeDiffText(timeDiff) });
        } else { // Incident Calculation
            const { incidentDate, incidentTime } = inputs;
            if (!incidentDate || !incidentTime) return;

            const incidentDateTime = incidentDate
                .hour(incidentTime.hour())
                .minute(incidentTime.minute())
                .second(incidentTime.second());

            // Apply diff: Incident Time - Diff = DVR Time at Incident
            // If DVR is BEHIND real time (positive diff), we SUBTRACT diff from real incident time to get DVR time?
            // Wait, logic check:
            // Diff = Real - DVR
            // Real = DVR + Diff
            // DVR = Real - Diff
            // So if we have Real Incident Time, we want DVR Incident Time.
            // DVR_Incident = Real_Incident - Diff. 
            // Correct.

            const dvrTimeOnIncident = incidentDateTime.subtract(timeDiff, 'millisecond');

            setResult({
                type: 'incident',
                content: dvrTimeOnIncident.format('DD/MM/YYYY, HH:mm:ss')
            });
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="80vh"
                dir="rtl"
                gap={4}
            >
                <Card sx={{ maxWidth: 600, width: '100%', p: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h4" component="h2" align="center" gutterBottom>
                            מחשבון זמן DVR
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom sx={{ mb: 2 }}>
                            {currentTime}
                        </Typography>

                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
                                <Tab label="מציאת זמן תקרית" />
                                <Tab label="חישוב הפרשי זמנים" />
                            </Tabs>
                        </Box>

                        <Stack spacing={3}>
                            {/* Real Time Input */}
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>בחר זמן אמת</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                    <Box flex={1}>
                                        <DatePicker
                                            value={inputs.realDate}
                                            onChange={(newValue) => handleDateChange('realDate', newValue)}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    error: errors.realDate,
                                                }
                                            }}
                                        />
                                    </Box>
                                    <Box flex={1}>
                                        <TimePicker
                                            value={inputs.realTime}
                                            onChange={(newValue) => handleDateChange('realTime', newValue)}
                                            views={['hours', 'minutes', 'seconds']}
                                            ampm={false}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    error: errors.realTime,
                                                }
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>

                            {/* DVR Time Input */}
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>בחר זמן DVR נוכחי</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                    <Box flex={1}>
                                        <DatePicker
                                            value={inputs.dvrDate}
                                            onChange={(newValue) => handleDateChange('dvrDate', newValue)}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    error: errors.dvrDate,
                                                }
                                            }}
                                        />
                                    </Box>
                                    <Box flex={1}>
                                        <TimePicker
                                            value={inputs.dvrTime}
                                            onChange={(newValue) => handleDateChange('dvrTime', newValue)}
                                            views={['hours', 'minutes', 'seconds']}
                                            ampm={false}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    error: errors.dvrTime,
                                                }
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>

                            {/* Incident Time Input - Only for Tab 0 */}
                            {tabValue === 0 && (
                                <Box>
                                    <Typography variant="subtitle1" gutterBottom>בחר את זמן התקרית</Typography>
                                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                        <Box flex={1}>
                                            <DatePicker
                                                value={inputs.incidentDate}
                                                onChange={(newValue) => handleDateChange('incidentDate', newValue)}
                                                slotProps={{
                                                    textField: {
                                                        size: 'small',
                                                        fullWidth: true,
                                                        error: errors.incidentDate,
                                                    }
                                                }}
                                            />
                                        </Box>
                                        <Box flex={1}>
                                            <TimePicker
                                                value={inputs.incidentTime}
                                                onChange={(newValue) => handleDateChange('incidentTime', newValue)}
                                                views={['hours', 'minutes', 'seconds']}
                                                ampm={false}
                                                slotProps={{
                                                    textField: {
                                                        size: 'small',
                                                        fullWidth: true,
                                                        error: errors.incidentTime,
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Stack>
                                </Box>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                onClick={calculate}
                            >
                                חשב
                            </Button>

                            {/* Results */}
                            {result && (
                                <Box mt={2} textAlign="center">
                                    {result.type === 'incident' && (
                                        <>
                                            <Typography variant="h6">זמן DVR בעת התקרית:</Typography>
                                            <Typography variant="body1" dir="ltr">{result.content}</Typography>
                                        </>
                                    )}
                                    {result.type === 'diff' && (
                                        <>
                                            <Typography variant="h6">הפרש זמנים בין הDVR לזמן אמת:</Typography>
                                            <Typography variant="body1">{result.content}</Typography>
                                        </>
                                    )}
                                </Box>
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </LocalizationProvider>
    );
};

export default DvrCalculator;
