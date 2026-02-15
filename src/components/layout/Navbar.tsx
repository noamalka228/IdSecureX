"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
    AppBar,
    Toolbar,
    Container,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    useScrollTrigger
} from "@mui/material";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Use MUI scroll trigger for efficient scroll detection
    const isScrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { title: 'בית', id: 'home' },
        { title: 'שירותים', id: 'services' },
        { title: 'אודות', id: 'about' },
        { title: 'צור קשר', id: 'contact' },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.7)' : 'transparent',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    height: isScrolled ? '70px' : '80px',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        {/* Logo Group */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setMobileMenuOpen(true)}
                                sx={{ display: { md: 'none' }, mr: 2 }}
                            >
                                <Menu size={28} />
                            </IconButton>

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    color: 'primary.main',
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                ID-<Box component="span" sx={{ color: 'text.primary' }}>SECURE</Box>X
                            </Typography>
                        </Box>

                        {/* Desktop Links */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                            {navLinks.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    sx={{
                                        color: 'text.primary',
                                        opacity: 0.8,
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        '&:hover': {
                                            opacity: 1,
                                            color: 'primary.main',
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        backgroundColor: 'background.default',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                        padding: 2
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: 'text.primary' }}>
                        <X size={32} />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Image
                        src="/images/logo.png"
                        alt="IdSecureX Logo"
                        width={180}
                        height={180}
                        style={{ objectFit: 'contain' }}
                    />
                </Box>

                <List>
                    {navLinks.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton
                                onClick={() => scrollTo(item.id)}
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    textAlign: 'right',
                                }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={{
                                        fontSize: '1.25rem',
                                        fontWeight: 500,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
