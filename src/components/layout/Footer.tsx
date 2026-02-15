"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Box, Button, Container, Typography } from "@mui/material";
import { CONTACT_INFO, MESSAGES, SOCIAL_LINKS } from "../../constants";

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
                    השאר פרטים ונחזור אליך בהקדם.
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
                    <Button
                        href={`${SOCIAL_LINKS.WHATSAPP}?text=${encodeURIComponent(MESSAGES.MESSAGE_BODY)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            textTransform: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Phone color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            {CONTACT_INFO.PHONE}
                        </Typography>
                    </Button>

                    <Button
                        href={`mailto:${CONTACT_INFO.EMAIL}?subject=${encodeURIComponent(MESSAGES.EMAIL_SUBJECT)}&body=${encodeURIComponent(MESSAGES.MESSAGE_BODY)}`}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            textTransform: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Mail color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            {CONTACT_INFO.EMAIL}
                        </Typography>
                    </Button>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: '6px 8px' }}>
                        <MapPin color="#D4AF37" size={24} />
                        <Typography variant="body1" fontWeight={500}>
                            {CONTACT_INFO.ADDRESS}
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
