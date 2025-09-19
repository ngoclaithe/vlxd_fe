function TruckIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 17h4"/>
      <path d="M3 7h10v8H3z"/>
      <path d="M13 11h4l4 4v-4h-4"/>
      <circle cx="7.5" cy="17.5" r="1.5"/>
      <circle cx="17.5" cy="17.5" r="1.5"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}
function HeadsetIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 1a9 9 0 00-9 9v6a3 3 0 003 3h1v-6H6V9a6 6 0 0112 0v4h-1v6h1a3 3 0 003-3v-6a9 9 0 00-9-9z"/>
    </svg>
  );
}

export default function FeaturesSection() {
  const features = [
    { title: "Vận chuyển toàn quốc", desc: "Đội xe chuyên nghiệp, giao nhanh đúng tiến độ.", icon: <TruckIcon /> },
    { title: "Bảo hành & chứng nhận", desc: "Hàng chính hãng, CO/CQ đầy đủ, đổi trả linh hoạt.", icon: <ShieldIcon /> },
    { title: "Tư vấn kỹ thuật 24/7", desc: "Đội ngũ kỹ sư sẵn sàng đồng hành cùng công trình.", icon: <HeadsetIcon /> },
  ];
  return (
    <section id="dich-vu" className="features-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Dịch vụ nổi bật</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Cam kết chất lượng dịch vụ đồng đều như sản phẩm</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="feature-card group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20 dark:text-blue-300">
              {f.icon}
            </div>
            <div className="text-base font-semibold text-gray-900 dark:text-white">{f.title}</div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
