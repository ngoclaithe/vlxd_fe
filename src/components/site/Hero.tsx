import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/40 dark:via-black dark:to-black" />
      <div aria-hidden className="absolute -left-10 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div aria-hidden className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-screen-xl px-4 py-20 text-center md:px-6 md:py-28">
        <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.09 6.26H20l-5.17 3.76L16.18 18 12 14.78 7.82 18l1.35-5.98L4 8.26h5.91L12 2z"/></svg>
          Nhà cung cấp VLXD uy tín
        </span>
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
          Vật liệu xây dựng chất lượng cho mọi công trình
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-gray-600 md:text-lg dark:text-gray-300">
          Từ xi măng, thép, gạch đến sơn và thiết bị hoàn thiện – tất cả đều có tại NovaBuild với giá cạnh tranh, giao nhanh và tư vấn tận tâm.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="#san-pham" className="primary-cta inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95">
            Khám phá sản phẩm
          </Link>
          <Link href="#lien-he" className="secondary-cta inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-black/5 dark:border-white/10 dark:bg-transparent dark:text-gray-100 dark:hover:bg-white/10">
            Liên hệ báo giá
          </Link>
        </div>
      </div>
    </section>
  );
}
