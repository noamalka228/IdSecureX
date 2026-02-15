"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    <div className={styles.logoGroup}>
                        {/* Mobile Menu Icon */}
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                        <div className={styles.logo}>ID-<span style={{ color: '#fff' }}>SECURE</span>X</div>
                    </div>

                    <div className={styles.navLinks}>
                        <button onClick={() => scrollTo('home')}>בית</button>
                        <button onClick={() => scrollTo('services')}>שירותים</button>
                        <button onClick={() => scrollTo('about')}>אודות</button>
                        <button onClick={() => scrollTo('contact')}>צור קשר</button>
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <div
                className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.open : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                <button
                    className={styles.closeButton}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Image
                        src="/images/logo.png"
                        alt="IdSecureX Logo"
                        width={180}
                        height={180}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={styles.mobileMenuLinks}>
                    <button onClick={() => scrollTo('home')}>בית</button>
                    <button onClick={() => scrollTo('services')}>שירותים</button>
                    <button onClick={() => scrollTo('about')}>אודות</button>
                    <button onClick={() => scrollTo('contact')}>צור קשר</button>
                </div>
            </div>
        </>
    );
}
