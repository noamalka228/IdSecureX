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
  title: "Id-SecureX | פתרונות אבטחה יוקרתיים",
  description: "מערכות אבטחה מתקדמות, מצלמות, ובית חכם לבתים פרטיים ועסקים.",
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
