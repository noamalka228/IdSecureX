"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

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
        <section id="home" className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <Image
                src="/images/hero.png"
                alt="Luxury Villa"
                fill
                className={styles.heroImage}
                priority
                quality={100}
            />
            <div className={styles.heroContent}>
                <div style={{
                    transform: `scale(${Math.max(1, 1.5 - (scrollY * 0.005))}) translateY(${Math.max(0, 100 - (scrollY * 1))}px)`,
                    willChange: 'transform',
                    display: 'inline-block',
                    marginBottom: '2rem'
                }}>
                    <Image
                        src="/images/logo.png"
                        alt="IdSecureX Logo"
                        width={350}
                        height={350}
                        className={styles.heroLogo}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <div style={{
                    opacity: Math.min(1, Math.max(0, scrollY / 80)),
                    transform: `translateY(${Math.max(0, 20 - scrollY / 3)}px)`,
                    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
                }}>
                    <h2 className={styles.heroSubtitle}>הבטיחות שלכם - המקצועיות שלנו</h2>
                    <h1 className={styles.heroTitle}>פתרונות אבטחה<br />בסטנדרט הגבוה ביותר</h1>
                    <p className={styles.heroDesc}>
                        אנו מספקים מערכות אבטחה מתקדמות, מצלמות חכמות ופתרונות בית חכם המותאמים אישית לצרכים שלך. שקט נפשי מלא, בעיצוב יוקרתי.
                    </p>
                    <div className={styles.ctaGroup}>
                        <button className="btnPrimary" onClick={() => scrollTo('contact')}>
                            קבל הצעה
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
