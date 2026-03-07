import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ID-SECUREX | פתרונות אבטחה",
  description: "מערכות אבטחה מיגון ותקשורת מתקדמות לבתים ועסקים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
