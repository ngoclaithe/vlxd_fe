export default function StatsStrip() {
  const stats = [
    { value: "+500", label: "Dự án đã hoàn thành" },
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "24/7", label: "Hỗ trợ kỹ thuật" },
    { value: "99%", label: "Khách hàng hài lòng" },
  ];
  return (
    <section className="stats-strip border-y border-white/10 bg-gray-50/60 dark:bg-white/5">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-item text-center">
            <div className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">{s.value}</div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
