"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="home"
            component="section"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                overflow: 'hidden',
                py: 4, // Add padding to prevent clipping on small screens
                // Fallback background color before image loads
                backgroundColor: 'background.default'
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, #050505 0%, rgba(5, 5, 5, 0.4) 100%)',
                    zIndex: 2,
                }}
            />

            {/* Background Image */}
            <Image
                src="/images/hero.png"
                alt="Luxury Villa"
                fill
                priority
                quality={100}
                style={{
                    objectFit: 'cover',
                    zIndex: 1,
                    opacity: 0.7,
                }}
            />

            {/* Content */}
            <Container
                maxWidth="md"
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    pt: 8 // Add some top padding to account for navbar if needed
                }}
            >
                {/* Logo with Scroll Effect */}
                <Box
                    sx={{
                        transform: `scale(${Math.max(1, 1.5 - (scrollY * 0.005))}) translateY(${Math.max(0, 100 - (scrollY * 1))}px)`,
                        willChange: 'transform',
                        display: 'inline-block',
                        marginBottom: 4,
                        position: 'relative',
                        // Responsive logo sizing
                        width: { xs: '60vw', md: 350 },
                        height: { xs: 'auto', md: 350 },
                    }}
                >
                    <Image
                        src="/images/logo.png"
                        alt="IdSecureX Logo"
                        width={350}
                        height={350}
                        style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: 'auto'
                        }}
                        priority
                    />
                </Box>

                {/* Text Content with Scroll Effect */}
                <Box
                    sx={{
                        opacity: Math.min(1, Math.max(0, scrollY / 80)),
                        transform: `translateY(${Math.max(0, 20 - scrollY / 3)}px)`,
                        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            color: 'primary.main',
                            textTransform: 'uppercase',
                            letterSpacing: { xs: '0.1rem', md: '0.2rem' },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 500,
                            mb: 2,
                        }}
                    >
                        הבטיחות שלכם - המקצועיות שלנו
                    </Typography>

                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '4rem' },
                            fontWeight: 700,
                            mb: 2,
                            // lineHeight: { xs: 1.2, md: 1.1 }
                        }}
                    >
                        פתרונות אבטחה<br />בסטנדרט הגבוה ביותר
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            color: 'text.secondary', // #A3A3A3 or customized #cccccc
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 4,
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        אנו מספקים מערכות אבטחה מתקדמות, מצלמות חכמות ופתרונות בית חכם המותאמים אישית לצרכים שלך.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => scrollTo('contact')}
                        >
                            קבל הצעה
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
