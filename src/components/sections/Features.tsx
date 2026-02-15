"use client";

import { Lock, Shield, Check } from "lucide-react";
import { Box, Container, Typography } from "@mui/material";

export default function Features() {
    const features = [
        {
            icon: <Lock size={40} />,
            title: "גישה מאובטחת למערכות"
        },
        {
            icon: <Shield size={40} />,
            title: "אחריות מורחבת"
        },
        {
            icon: <Check size={40} />,
            title: "התקנה מקצועית"
        }
    ];

    return (
        <Box component="section" sx={{ py: 8 }}>
            <Container>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 5,
                        textAlign: 'center'
                    }}
                >
                    {features.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ mb: 2, color: 'text.secondary' }}>
                                {item.icon}
                            </Box>
                            <Typography variant="h6" component="h4" color="text.primary" fontWeight="bold">
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
