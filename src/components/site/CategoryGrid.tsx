type Category = { key: string; name: string; desc: string; icon: JSX.Element };

function CementIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 22h18"/>
      <path d="M5 22V8l7-5 7 5v14"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  );
}
function SteelIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3l8 8"/>
      <path d="M13 13l8 8"/>
      <path d="M21 3L3 21"/>
    </svg>
  );
}
function BrickIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 11h18M6 5v6m6-6v6m6-6v6"/>
    </svg>
  );
}
function SandStoneIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17l5-9 5 9 5-9 3 5"/>
      <path d="M2 21h20"/>
    </svg>
  );
}
function PaintIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2l4 4-9 9-4 1 1-4 9-9z"/>
      <path d="M16 6l-1 1"/>
      <path d="M8 13l3 3"/>
      <path d="M2 22h8"/>
    </svg>
  );
}
function SanitaryIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 10h6a5 5 0 015 5v2H8a5 5 0 01-5-5v-2z"/>
      <path d="M9 6V3h6v3"/>
      <path d="M16 17v3"/>
    </svg>
  );
}

export default function CategoryGrid() {
  const categories: Category[] = [
    { key: "xi-mang", name: "Xi măng", desc: "PCB30, PCB40, đa dụng", icon: <CementIcon /> },
    { key: "thep", name: "Thép xây dựng", desc: "Cuộn, cây, hình", icon: <SteelIcon /> },
    { key: "gach", name: "Gạch ốp lát", desc: "Gạch men, gạch nung", icon: <BrickIcon /> },
    { key: "cat-da", name: "Cát - đá", desc: "Cát bê tông, đá 1x2", icon: <SandStoneIcon /> },
    { key: "son", name: "Sơn - chống thấm", desc: "Nội ngoại thất", icon: <PaintIcon /> },
    { key: "thiet-bi", name: "Thiết bị vệ sinh", desc: "Lavabo, sen vòi", icon: <SanitaryIcon /> },
  ];

  return (
    <section id="san-pham" className="category-grid mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Danh mục nổi bật</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Chọn nhanh theo nhu cầu công trình của bạn</p>
        </div>
        <a href="#lien-he" className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 md:inline-flex dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/10">Nhận tư vấn</a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <article key={c.key} className="category-card group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start gap-4">
              <div className="icon-holder inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20 dark:text-blue-300">
                {c.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-sm">Xem sản phẩm</button>
              <span className="text-xs text-gray-500 dark:text-gray-400">Giao trong 24h</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
