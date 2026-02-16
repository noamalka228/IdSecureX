"use client";

import { Box } from '@mui/material';
import DvrCalculator from '../../components/dvr/DvrCalculator';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function DvrCalculatorPage() {
    return (
        <>
            <Navbar />
            <Box
                component="main"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '80px',
                    m: 4,
                    px: 2
                }}
            >
                <DvrCalculator />
            </Box>
            <Footer />
        </>
    );
}
