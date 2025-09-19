"use client";
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <div className="relative h-full w-full">
          <Image src={IMAGES[index]} alt={`Banner ${index + 1}`} fill className="object-cover transition-transform duration-700" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />


        {/* Indicators only, no text or CTAs */}
        <div className="absolute right-4 bottom-4 flex gap-2">
          {IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-2 w-8 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
