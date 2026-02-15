import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerContent}>
                <h2 className="sectionTitle">צור קשר</h2>
                <p className="sectionSubtitle" style={{ marginBottom: '40px' }}>
                    מומחי האבטחה שלנו זמינים לייעוץ. השאר פרטים ונחזור אליך בהקדם.
                </p>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Phone color="#D4AF37" size={24} />
                        <span className={styles.contactDetails}>052-590-6555</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail color="#D4AF37" size={24} />
                        <span className={styles.contactDetails}>contact@idsecurex.co.il</span>
                    </div>
                    <div className={styles.contactItem}>
                        <MapPin color="#D4AF37" size={24} />
                        <span className={styles.contactDetails}>מרכז הארץ, ישראל</span>
                    </div>
                </div>

                <div className={styles.copy}>
                    © {new Date().getFullYear()} Id-SecureX. כל הזכויות שמורות.
                </div>
            </div>
        </footer>
    );
}
