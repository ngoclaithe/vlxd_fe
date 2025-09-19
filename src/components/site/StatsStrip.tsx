export default function StatsStrip() {
  const stats = [
    { value: "+500", label: "Dự án đã hoàn thành" },
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "24/7", label: "Hỗ trợ kỹ thuật" },
    { value: "99%", label: "Khách hàng hài lòng" },
  ];
  return (
    <section className="stats-strip border-y border-white/10 bg-transparent">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-item text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">{s.value}</div>
            <div className="text-xs font-medium text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
