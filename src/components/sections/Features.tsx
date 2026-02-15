import { Lock, Shield, Check } from "lucide-react";
import styles from "./Features.module.css";

export default function Features() {
    const features = [
        {
            icon: <Lock size={40} color="#555" />,
            title: "גישה מאובטחת למערכות"
        },
        {
            icon: <Shield size={40} color="#555" />,
            title: "אחריות מורחבת"
        },
        {
            icon: <Check size={40} color="#555" />,
            title: "התקנה מקצועית"
        }
    ];

    return (
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className={styles.featuresGrid}>
                    {features.map((item, index) => (
                        <div key={index}>
                            <div className={styles.featureIcon}>
                                {item.icon}
                            </div>
                            <h4 className={styles.featureTitle}>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
