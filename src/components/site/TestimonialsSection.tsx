function QuoteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8V11.17A5.17 5.17 0 004.83 6H7.17zM19.17 6A5.17 5.17 0 0014 11.17V22h8V11.17A5.17 5.17 0 0016.83 6h2.34z"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  const items = [
    { name: "Anh Bình - Nhà thầu", text: "Giao hàng nhanh, giá tốt, chứng từ đầy đủ. Công trình luôn đúng tiến độ.", role: "Contractor" },
    { name: "Chị Lan - Chủ nhà", text: "Được tư vấn vật liệu phù hợp, tiết kiệm chi phí mà vẫn bền đẹp.", role: "Homeowner" },
  ];
  return (
    <section className="testimonials-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Khách hàng nói gì?</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Niềm tin của khách hàng là động lực phát triển của NovaBuild</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((t) => (
          <figure key={t.name} className="testimonial-card relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300"><QuoteIcon/></div>
            <blockquote className="text-sm text-gray-700 dark:text-gray-200">“{t.text}”</blockquote>
            <figcaption className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">{t.name} • {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
