'use client';

import { createTheme } from '@mui/material/styles';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['hebrew', 'latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D4AF37', // Gold
            light: '#F2C94C',
        },
        background: {
            default: '#050505',
            paper: '#121212',
        },
        text: {
            primary: '#F5F5F5',
            secondary: '#A3A3A3',
        },
        divider: '#333333',
    },
    direction: 'rtl',
    typography: {
        fontFamily: rubik.style.fontFamily,
        allVariants: {
            textAlign: 'right',
        },
        h1: {
            fontWeight: 700,
            lineHeight: 1.1,
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.1,
        },
        // Add other typography variants as needed
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '14px 32px',
                },
                containedPrimary: {
                    color: '#000',
                    '&:hover': {
                        backgroundColor: '#F2C94C',
                        transform: 'translateY(-2px)',
                    },
                },
                outlined: {
                    borderColor: '#fff',
                    color: '#fff',
                    '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    '@media (min-width: 600px)': {
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                    },
                }
            }
        }
    },
});

export default theme;
