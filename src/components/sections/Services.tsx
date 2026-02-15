"use client";

import { Eye, Shield, Smartphone } from "lucide-react";
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
            icon: <Smartphone size={48} color="#D4AF37" />,
            title: "בית חכם",
            desc: "שליטה על המערכות המותקנות בביתכם מכל מקום בעולם באמצעות הסמארטפון. אינטגרציה מלאה בין האזעקה והמצלמות."
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
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
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
                                height: '100%',
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
