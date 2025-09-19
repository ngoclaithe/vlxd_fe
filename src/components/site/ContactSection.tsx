export default function ContactSection() {
  return (
    <section id="lien-he" className="contact-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-2xl font-bold tracking-tight text-white md:text-3xl">Liên hệ</h2>
        <p className="mt-1 text-sm text-white/80">Kết nối với chúng tôi để được tư vấn và hỗ trợ nhanh</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="contact-card rounded-2xl border border-white/6 bg-white/5 p-6 shadow-sm">
          <div className="text-sm font-semibold text-white">Văn phòng</div>
          <p className="mt-1 text-sm text-white/80">123 Đường Xây Dựng, Q.1, TP.HCM</p>
        </div>
        <div className="contact-card rounded-2xl border border-white/6 bg-white/5 p-6 shadow-sm">
          <div className="text-sm font-semibold text-white">Hotline</div>
          <p className="mt-1 text-sm text-white/80"><a href="tel:+84901234567" className="hover:underline">0901 234 567</a></p>
        </div>
        <div className="contact-card rounded-2xl border border-white/6 bg-white/5 p-6 shadow-sm">
          <div className="text-sm font-semibold text-white">Email</div>
          <p className="mt-1 text-sm text-white/80"><a href="mailto:hello@novabuild.vn" className="hover:underline">hello@novabuild.vn</a></p>
        </div>
      </div>
    </section>
  );
}
