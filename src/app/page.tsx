import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Footer from "../components/layout/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Footer />
    </main>
  );
}
