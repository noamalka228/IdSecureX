import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={`section ${styles.aboutSection}`}>
            <div className="container">
                {/* Showcase 1 */}
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
                        <h2 className="sectionTitle">טכנולוגיה ללא פשרות</h2>
                        <p style={{ marginBottom: '20px' }}>
                            אנו משתמשים בציוד המתקדם ביותר בשוק כדי להבטיח שהנכס שלכם מוגן בכל רגע נתון.
                        </p>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> עיצוב מינימליסטי ויוקרתי</li>
                            <li className={styles.featureItem}><Check color="#D4AF37" size={20} /> עמידות בכל תנאי מזג אוויר</li>
                            <li className={styles.featureItem}><Check color="#D4AF37" size={20} />שמירת הקלטות בשרת מקומי</li>
                        </ul>
                    </div>
                </div>

                {/* Showcase 2 */}
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
                        <h2 className="sectionTitle">שליטה בקצות האצבעות</h2>
                        <p style={{ marginBottom: '20px' }}>
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
    );
}
