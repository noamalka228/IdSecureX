import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
