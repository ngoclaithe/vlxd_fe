export default function ContactSection() {
  return (
    <section id="lien-he" className="contact-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Liên hệ</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Kết nối với chúng tôi để được tư vấn và báo giá nhanh</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="contact-card rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">Văn phòng</div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">123 Đường Xây Dựng, Q.1, TP.HCM</p>
        </div>
        <div className="contact-card rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">Hotline</div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300"><a href="tel:+84901234567" className="hover:underline">0901 234 567</a></p>
        </div>
        <div className="contact-card rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">Email</div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300"><a href="mailto:hello@novabuild.vn" className="hover:underline">hello@novabuild.vn</a></p>
        </div>
      </div>
    </section>
  );
}
