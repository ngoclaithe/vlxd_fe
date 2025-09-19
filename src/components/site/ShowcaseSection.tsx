export default function ShowcaseSection() {
  const projects = [
    { name: "Nhà ở cao tầng", desc: "Cung cấp thép và bê tông thương phẩm.", tag: "Dân dụng" },
    { name: "Nhà xưởng công nghiệp", desc: "Giải pháp vật tư trọn gói.", tag: "Công nghiệp" },
    { name: "Khu nghỉ dưỡng biển", desc: "Hoàn thiện & cảnh quan.", tag: "Du lịch" },
  ];
  return (
    <section id="du-an" className="showcase-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Dự án tiêu biểu</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Một vài công trình mà NovaBuild đã đồng hành</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="project-card relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:from-slate-900/40 dark:to-black">
            <div aria-hidden className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <span className="tag inline-flex items-center rounded-full border border-black/10 bg-white/70 px-2 py-0.5 text-xs font-medium text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-200">{p.tag}</span>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
