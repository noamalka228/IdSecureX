import { Eye, Shield, Smartphone } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
    const services = [
        {
            icon: <Eye size={48} color="#D4AF37" />,
            title: "מצלמות אבטחה איכותיות",
            desc: "מערכות צילום ברזולוציה גבוהה עם יכולות ראיית לילה בצבע, המשתלבות בטבעיות עם עיצוב הבית."
        },
        {
            icon: <Shield size={48} color="#D4AF37" />,
            title: "מערכות אזעקה",
            desc: "גלאים מתקדמים להתרעה על פריצות, אפשרות חיבור למוקד מצוקה 24/7 והתראות מיידיות לטלפון הנייד."
        },
        {
            icon: <Smartphone size={48} color="#D4AF37" />,
            title: "בית חכם",
            desc: "שליטה על המערכות המותקנות בביתכם מכל מקום בעולם באמצעות הסמארטפון. אינטגרציה מלאה בין האזעקה והמצלמות."
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>המומחיות שלנו</span>
                    <h2 className="sectionTitle">פתרונות אבטחה מקיפים</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconBox}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
