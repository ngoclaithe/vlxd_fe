function QuoteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8V11.17A5.17 5.17 0 004.83 6H7.17zM19.17 6A5.17 5.17 0 0014 11.17V22h8V11.17A5.17 5.17 0 0016.83 6h2.34z"/>
    </svg>
  );
}

import Image from "next/image";

export default function TestimonialsSection() {
  const items = [
    {
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/01/z5116721845530_f8c76ae162f1ebcd3f0c533b9796b3ad1.jpg",
      text: "Hệ thống mua hàng linh hoạt, đội ngũ chăm sóc khách hàng tận tình, tích cực và tận tụy với công việc.",
      name: "Anh Hiếu",
      location: "Lào Cai",
    },
    {
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/01/z5116721832219_d2f5cead0fb1629b481a0e984480d4341.jpg",
      text: "Tiết kiệm thời gian và nguồn lực, linh hoạt và hiệu quả, tiện dụng, đội ngũ bán hàng hỗ trợ nhiệt tình. VLXDgiatot xứng đáng là nơi tin cậy cho bạn.",
      name: "Anh Minh",
      location: "Đà Nẵng",
    },
    {
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/01/z5116721828795_784d7877ba3a93e8d6541929482605c11.jpg",
      text: "Với nhiều sản phẩm phong phú và nhiều thương hiệu nổi tiếng, chúng tôi đã có sự lựa chọn đúng đắn cho ngôi nhà của mình.",
      name: "Anh Tiến",
      location: "Phú Quốc, Kiên Giang",
    },
  ];

  return (
    <section className="testimonials-section mx-auto container-max px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-3xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Khách hàng nói gì?</h2>
        <p className="mt-2 text-sm text-muted">Niềm tin của khách hàng là động lực phát triển của NovaBuild</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((t, idx) => (
          <figure key={idx} className="testimonial-card card p-6 text-center">
            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
              <Image src={t.img} alt={t.name} width={80} height={80} style={{ objectFit: "cover" }} />
            </div>
            <blockquote className="min-h-[64px] text-sm text-gray-800">"{t.text}"</blockquote>
            <figcaption className="mt-4 text-xs font-medium text-muted">{t.name} / {t.location}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
