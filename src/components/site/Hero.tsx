"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const IMAGES = [
  "https://scgvlxd.com/wp-content/themes/yootheme/cache/da/Web-scaled-da610210.webp",
  "https://scgvlxd.com/wp-content/themes/yootheme/cache/62/Banner-Website.-1-62f7d0bd.webp",
  "https://scgvlxd.com/wp-content/uploads/2025/08/xem-ngay-1.png",
  "https://scgvlxd.com/wp-content/themes/yootheme/cache/26/web-055518da-2626e5e6.webp",
  "https://scgvlxd.com/wp-content/themes/yootheme/cache/67/banner-website-scg-1440-x-550-px-676d54ca.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section relative">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
        <img src={IMAGES[index]} alt={`Banner ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="absolute left-4 top-4 flex gap-2">
          <button aria-label="Prev" onClick={() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)} className="controls rounded-full bg-white/30 p-2 text-white backdrop-blur hover:bg-white/40">
            ‹
          </button>
          <button aria-label="Next" onClick={() => setIndex((i) => (i + 1) % IMAGES.length)} className="controls rounded-full bg-white/30 p-2 text-white backdrop-blur hover:bg-white/40">
            ›
          </button>
        </div>
        <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4 text-center text-white">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Nhà cung cấp VLXD uy tín
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">NovaBuild — Vật liệu xây dựng cho mọi công trình</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90 md:text-base">Xi măng, thép, gạch, sơn và thiết bị hoàn thiện. Giá tốt, giao nhanh, tư vấn tận tâm.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="#san-pham" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-sm">Khám phá sản phẩm</Link>
            <Link href="#lien-he" className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white">Liên hệ báo giá</Link>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-2 w-8 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
