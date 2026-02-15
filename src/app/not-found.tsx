'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
    return (
        <Box
            component="main"
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
            }}
        >
            <Navbar />

            <Container
                component="section"
                maxWidth="md"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 8,
                    mt: 8
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: { xs: '6rem', md: '10rem' },
                        fontWeight: 900,
                        color: 'primary.main',
                        lineHeight: 1
                    }}
                >
                    שגיאה
                </Typography>

                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        mb: 2,
                        fontWeight: 700
                    }}
                >
                    העמוד לא נמצא
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 4,
                        maxWidth: '700px',
                        fontSize: '1.1rem'
                    }}
                >
                    מצטערים, אך העמוד שחיפשת אינו קיים. ייתכן שהוא הוסר, שמו שונה או שהוא אינו זמין.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    href="/"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem'
                    }}
                >
                    חזרה לדף הבית
                </Button>
            </Container>

            <Footer />
        </Box>
    );
}
