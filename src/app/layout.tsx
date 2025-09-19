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

          <Header />
          <main>{children}</main>

          <Footer />
        </div>

        {/* Floating contact buttons (Messenger, Zalo) */}
        <div className="floating-contacts" aria-hidden={false}>
          <a href="https://m.me/novabuild" target="_blank" rel="noopener noreferrer" aria-label="Messenger" className="fc-btn fc-mess">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="block">
              <path d="M12 2C6.48 2 2 6.03 2 11.05c0 2.98 1.53 5.64 3.96 7.38v3.02l3.45-1.9c.92.25 1.88.38 2.59.38 5.52 0 10-4.03 10-9.05S17.52 2 12 2z" fill="currentColor" />
              <path d="M7.5 12.5 10 9l3.5 3.5L17 9l-5 7-4.5-4.5z" fill="#fff" />
            </svg>
          </a>

          <a href="https://zalo.me/84901234567" target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="fc-btn fc-zalo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="block">
              <path d="M12 2C6.48 2 2 6.03 2 11.05c0 2.98 1.53 5.64 3.96 7.38v3.02l3.45-1.9c.92.25 1.88.38 2.59.38 5.52 0 10-4.03 10-9.05S17.52 2 12 2z" fill="currentColor" />
              <path d="M7.5 7.5h9L12 16l-4.5-8.5z" fill="#fff" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
