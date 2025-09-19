"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }
  return (
    <section id="newsletter" className="newsletter-section mx-auto max-w-screen-xl px-4 pb-16 md:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/6 bg-transparent p-8 text-white shadow-sm md:p-12">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Đăng ký nhận tin</h3>
          <p className="mt-1 text-sm text-white/80">Nhận thông tin sản phẩm, khuyến mãi và tin tức mới nhất từ NovaBuild.</p>
          <form className="mt-6 flex max-w-md gap-2" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-full border border-white/8 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none" placeholder="Nhập email của bạn" type="email" required />
            <button className="rounded-full btn-accent px-5 py-3 text-sm font-semibold">Đăng ký</button>
          </form>
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/6 blur-3xl"/>
      </div>
    </section>
  );
}
