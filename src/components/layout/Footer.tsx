"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            id="contact"
            sx={{
                bgcolor: 'background.paper',
                py: 10,
                borderTop: 1,
                borderColor: 'divider',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                    צור קשר
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
                >
                    מומחי האבטחה שלנו זמינים לייעוץ. השאר פרטים ונחזור אליך בהקדם.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        gap: 4,
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Phone color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            052-590-6555
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Mail color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            contact@idsecurex.co.il
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <MapPin color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            מרכז הארץ, ישראל
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 10 }}
                >
                    © {new Date().getFullYear()} Id-SecureX. כל הזכויות שמורות.
                </Typography>
            </Container>
        </Box>
    );
}
