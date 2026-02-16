"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function About() {
    // Shared styles for content rendering
    const renderContent = (title: string, desc: string, features: string[]) => (
        <Box>
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                {desc}
            </Typography>
            <List>
                {features.map((feature, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <Check color="#D4AF37" size={24} />
                        </ListItemIcon>
                        <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                                fontSize: '1.1rem',
                                color: 'text.secondary'
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#0a0a0a'
            }}
        >
            <Container>
                {/* Showcase 1 */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 6, md: 8 },
                        alignItems: 'center',
                        mb: { xs: 10, md: 15 }
                    }}
                >
                    <Box>
                        <Box sx={{
                            position: 'relative',
                            height: { xs: 300, md: 500 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                        }}>
                            <Image
                                src="/images/camera.png"
                                alt="Security Camera"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        {renderContent(
                            "טכנולוגיה ללא פשרות",
                            "אנו משתמשים בציוד המתקדם ביותר בשוק כדי להבטיח שהנכס שלכם מוגן בכל רגע נתון.",
                            [
                                "עיצוב מינימליסטי ויוקרתי",
                                "עמידות בכל תנאי מזג אוויר",
                                "שמירת הקלטות בשרת מקומי"
                            ]
                        )}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 6, md: 8 },
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ order: { xs: 1, md: 2 } }}>
                        {/* Image Column - Visual Right (2nd) on Desktop, Top (1st) on Mobile */}
                        <Box sx={{
                            position: 'relative',
                            height: { xs: 300, md: 500 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                        }}>
                            <Image
                                src="/images/smart-home.png"
                                alt="Smart Interface"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ order: { xs: 2, md: 1 } }}>
                        {/* Content Column - Visual Left (1st) on Desktop, Bottom (2nd) on Mobile */}
                        {renderContent(
                            "שליטה בקצות האצבעות",
                            "האפליקציה המתקדמת שלנו מאפשרת לך לנהל את מערך האבטחה בקלות. צפה בשידור חי, דרוך את האזעקה, או פתח את השער לאורחים - הכל בלחיצת כפתור.",
                            [
                                "ממשק משתמש אינטואיטיבי בעברית",
                                "התראות חכמות בזמן אמת",
                                "תמיכה במגוון מכשירים"
                            ]
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
