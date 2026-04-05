import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "انگل: معماری نابرابری — تحلیل سینمایی",
  description:
    "تحلیل سینمایی فیلم انگل اثر بونگ جون‌هو — بررسی معماری عمودی، شخصیت‌پردازی و نمادپردازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} antialiased`}>
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
