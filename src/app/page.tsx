"use client";

import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Footer />
    </Box>
  );
}
