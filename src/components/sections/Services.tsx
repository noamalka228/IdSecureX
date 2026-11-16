"use client";

import { Eye, Shield, LockKeyhole, BellRing, Cctv } from "lucide-react";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function Services() {
    const services = [
        {
            icon: <Eye size={48} color="#D4AF37" />,
            title: "מצלמות אבטחה איכותיות",
            desc: "מערכות צילום ברזולוציה גבוהה עם יכולות ראיית לילה בצבע, המשתלבות בטבעיות עם עיצוב הבית."
        },
        {
            icon: <Shield size={48} color="#D4AF37" />,
            title: "מערכות אזעקה",
            desc: "גלאים מתקדמים להתרעה על פריצות, אפשרות חיבור למוקד מצוקה 24/7 והתראות מיידיות לטלפון הנייד."
        },
        {
            icon: <LockKeyhole size={48} color="#D4AF37" />,
            title: "מנעולים חכמים",
            desc: "התקנת מנעולים חכמים עם מערכות זיהוי פנים ואפשרויות ניטרול מגוונות באמצעות קוד, צ'יפים, טביעות אצבע או אפליקציה."
        },
        {
            icon: <BellRing size={48} color="#D4AF37" />,
            title: "אינטרקום וקודנים לבניינים, עסקים ובתים פרטיים",
            desc: "התקנת מערכות אינטרקום חכמות וקודנים לשערים ודלתות כניסה – לשליטה מלאה על הגישה לנכס מכל מקום."
        },
        {
            icon: <Cctv size={48} color="#D4AF37" />,
            title: "התקנת מצלמות במעליות",
            desc: "התקנת מצלמות אבטחה ייעודיות במעליות, עמידות לאורך זמן בעלות כיסוי מלא וחיבור למערכת הניטור המרכזית של הבניין."
        }
    ];

    return (
        <Box component="section" id="services" sx={{ py: 10 }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{
                            color: 'primary.main',
                            fontSize: '1.1rem',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        המומחיות שלנו
                    </Typography>
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
                        פתרונות אבטחה מקיפים
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 5
                    }}
                >
                    {services.map((service, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                bgcolor: 'background.paper',
                                p: 5,
                                borderRadius: 2,
                                transition: 'transform 0.3s ease',
                                borderBottom: '2px solid transparent',
                                width: { xs: '100%', sm: 'calc(50% - 20px)', lg: 'calc(33.333% - 27px)' },
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    borderBottomColor: 'primary.main',
                                }
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                {service.icon}
                            </Box>
                            <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {service.desc}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
