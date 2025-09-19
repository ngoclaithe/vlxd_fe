function QuoteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8V11.17A5.17 5.17 0 004.83 6H7.17zM19.17 6A5.17 5.17 0 0014 11.17V22h8V11.17A5.17 5.17 0 0016.83 6h2.34z"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  const items = [
    { name: "Anh Bình - Nhà thầu", text: "Giao hàng nhanh, giá tốt, chứng từ đầy đủ. Công trình luôn đúng tiến độ.", role: "Nhà thầu" },
    { name: "Chị Lan - Chủ nhà", text: "Được tư vấn vật liệu phù hợp, tiết kiệm chi phí mà vẫn bền đẹp.", role: "Chủ nhà" },
  ];
  return (
    <section className="testimonials-section mx-auto container-max px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-3xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Khách hàng nói gì?</h2>
        <p className="mt-2 text-sm text-muted">Niềm tin của khách hàng là động lực phát triển của NovaBuild</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((t) => (
          <figure key={t.name} className="testimonial-card card p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#e6fffb] to-white text-accent shadow-sm"><QuoteIcon/></div>
            <blockquote className="text-sm text-gray-800">"{t.text}"</blockquote>
            <figcaption className="mt-4 text-xs font-medium text-muted">{t.name} • {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
