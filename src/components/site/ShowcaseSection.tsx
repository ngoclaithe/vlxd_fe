export default function ShowcaseSection() {
  const projects = [
    { name: "Nhà ở cao tầng", desc: "Cung cấp thép và bê tông thương phẩm.", tag: "Dân dụng" },
    { name: "Nhà xưởng công nghiệp", desc: "Giải pháp vật tư trọn gói.", tag: "Công nghiệp" },
    { name: "Khu nghỉ dưỡng biển", desc: "Hoàn thiện & cảnh quan.", tag: "Du lịch" },
  ];
  return (
    <section id="du-an" className="showcase-section mx-auto container-max px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-3xl font-bold tracking-tight text-white">Dự án tiêu biểu</h2>
        <p className="mt-2 text-sm text-white/80">Một vài công trình mà NovaBuild đã đồng hành</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="project-card card overflow-hidden p-6">
            <div aria-hidden className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="flex items-center justify-between">
              <span className="tag inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/90">{p.tag}</span>
              <span className="text-xs text-muted">Hoàn thành</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-sm text-white/80">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
