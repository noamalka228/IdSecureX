"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Shield,
  Smartphone,
  Eye,
  Check,
  Lock,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollYValues, setScrollYValues] = useState({ scrollY: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollYValues({ scrollY: window.scrollY });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>ID-<span style={{ color: '#fff' }}>SECURE</span>X</div>

          <div className={styles.navLinks}>
            <button onClick={() => scrollTo('home')}>בית</button>
            <button onClick={() => scrollTo('services')}>שירותים</button>
            <button onClick={() => scrollTo('about')}>אודות</button>
            <button onClick={() => scrollTo('contact')}>צור קשר</button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: '#fff', display: 'none' }}
          // Hidden for now, would need media query visibility content
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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
            transform: `scale(${Math.max(1, 1.5 - (scrollYValues.scrollY * 0.002))}) translateY(${Math.max(0, 100 - (scrollYValues.scrollY * 0.5))}px)`,
            transition: 'transform 0.1s ease-out',
            display: 'inline-block',
            marginBottom: '2rem'
          }}>
            <Image
              src="/images/logo.png"
              alt="IdSecureX Logo"
              width={350}
              height={350}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div style={{
            opacity: Math.min(1, Math.max(0, (scrollYValues.scrollY - 100) / 200)),
            transform: `translateY(${Math.max(0, 50 - (scrollYValues.scrollY - 100) / 4)}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}>
            <h2 className={styles.heroSubtitle}>בטיחות היא היוקרה החדשה</h2>
            <h1 className={styles.heroTitle}>פתרונות אבטחה<br />בסטנדרט הגבוה ביותר</h1>
            <p className={styles.heroDesc}>
              אנו מספקים מערכות אבטחה מתקדמות, מצלמות חכמות ופתרונות בית חכם המותאמים אישית לצרכים שלך. שקט נפשי מלא, בעיצוב יוקרתי.
            </p>
            <div className={styles.ctaGroup}>
              <button className={styles.btnPrimary} onClick={() => scrollTo('contact')}>
                קבל הצעה
              </button>
              <button className={styles.btnSecondary} onClick={() => scrollTo('services')}>
                למד עוד
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>המומחיות שלנו</span>
            <h2 className={styles.sectionTitle}>פתרונות אבטחה מקיפים</h2>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <Eye size={48} color="#D4AF37" />
              </div>
              <h3 className={styles.cardTitle}>מצלמות אבטחה 4K</h3>
              <p className={styles.cardDesc}>
                מערכות צילום ברזולוציה גבוהה עם יכולות ראיית לילה בצבע, זיהוי פנים ובינה מלאכותית לניטור מדויק.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}>
                <Smartphone size={48} color="#D4AF37" />
              </div>
              <h3 className={styles.cardTitle}>בית חכם</h3>
              <p className={styles.cardDesc}>
                שליטה מלאה על הבית מכל מקום בעולם. אינטגרציה מלאה בין האזעקה, המצלמות, התאורה והמיזוג.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}>
                <Shield size={48} color="#D4AF37" />
              </div>
              <h3 className={styles.cardTitle}>מערכות אזעקה</h3>
              <p className={styles.cardDesc}>
                גלאים מתקדמים למניעת פריצות, חיבור למוקד מצוקה 24/7 והתראות מיידיות לטלפון הנייד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase 1 */}
      <section id="about" className={styles.section} style={{ background: '#0a0a0a' }}>
        <div className={styles.container}>
          <div className={styles.showcase}>
            <div className={styles.showcaseImageWrapper}>
              <Image
                src="/images/camera.png"
                alt="Security Camera"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.showcaseContent}>
              <h2 className={styles.sectionTitle}>טכנולוגיה ללא פשרות</h2>
              <p style={{ color: '#a3a3a3', marginBottom: '20px' }}>
                אנו משתמשים בציוד המתקדם ביותר בשוק כדי להבטיח שהנכס שלך מוגן בכל רגע נתון.
                המצלמות שלנו מעוצבות להשתלב בצורה הרמונית עם עיצוב הבית, מבלי לפגוע באסתטיקה.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> עיצוב מינימליסטי ויוקרתי</li>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> עמידות בכל תנאי מזג אוויר</li>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> הקלטה בענן ובשרת מקומי</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.showcase} ${styles.reverse}`}>
            <div className={styles.showcaseImageWrapper}>
              <Image
                src="/images/smart-home.png"
                alt="Smart Interface"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.showcaseContent}>
              <h2 className={styles.sectionTitle}>שליטה בקצות האצבעות</h2>
              <p style={{ color: '#a3a3a3', marginBottom: '20px' }}>
                האפליקציה המתקדמת שלנו מאפשרת לך לנהל את מערך האבטחה בקלות.
                צפה בשידור חי, דרוך את האזעקה, או פתח את השער לאורחים - הכל בלחיצת כפתור.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> ממשק משתמש אינטואיטיבי בעברית</li>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> התראות חכמות בזמן אמת</li>
                <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> תמיכה במגוון מכשירים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Feature Highlights (Icons) */}
      <section className={styles.section}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <Lock size={40} color="#555" style={{ marginBottom: 10 }} />
              <h4 style={{ color: '#fff' }}>הצפנה מלאה</h4>
            </div>
            <div>
              <Shield size={40} color="#555" style={{ marginBottom: 10 }} />
              <h4 style={{ color: '#fff' }}>אחריות מורחבת</h4>
            </div>
            <div>
              <Phone size={40} color="#555" style={{ marginBottom: 10 }} />
              <h4 style={{ color: '#fff' }}>תמיכה 24/7</h4>
            </div>
            <div>
              <Check size={40} color="#555" style={{ marginBottom: 10 }} />
              <h4 style={{ color: '#fff' }}>התקנה מקצועית</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.sectionTitle}>צור קשר</h2>
          <p className={styles.sectionSubtitle} style={{ marginBottom: '40px' }}>
            מומחי האבטחה שלנו זמינים לייעוץ. השאר פרטים ונחזור אליך בהקדם.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone color="#D4AF37" size={24} />
              <span>050-123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <Mail color="#D4AF37" size={24} />
              <span>contact@idsecurex.co.il</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin color="#D4AF37" size={24} />
              <span>תל אביב, ישראל</span>
            </div>
          </div>

          <div className={styles.copy}>
            © {new Date().getFullYear()} Id-SecureX. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </main>
  );
}
