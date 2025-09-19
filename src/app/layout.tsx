import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaBuild - Vật liệu xây dựng chất lượng cho mọi công trình",
  description: "Giới thiệu công ty và bán vật liệu xây dựng: xi măng, thép, gạch, sơn, thiết bị hoàn thiện. Giao nhanh, giá tốt, tư vấn tận tâm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
          {/* @ts-expect-error Server Component boundary */}
          <Header />
          <main>{children}</main>
          {/* @ts-expect-error Server Component boundary */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
