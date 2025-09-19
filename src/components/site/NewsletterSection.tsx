"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now just clear the input — integration (API) can be added later
    setEmail("");
    // Could show a toast or confirmation later
  }
  return (
    <section id="bao-gia" className="newsletter-section mx-auto max-w-screen-xl px-4 pb-16 md:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-sm md:p-12 dark:border-white/10">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Nhận báo giá trong ngày</h3>
          <p className="mt-1 text-sm text-white/90">Để lại email, chúng tôi sẽ liên hệ và gửi bảng giá mới nhất.</p>
          <form className="mt-6 flex max-w-md gap-2" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-full border-0 bg-white/90 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none" placeholder="Nhập email của bạn" type="email" required />
            <button className="rounded-full bg-black/80 px-5 py-3 text-sm font-semibold text-white hover:bg-black">Đăng ký</button>
          </form>
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"/>
      </div>
    </section>
  );
}
