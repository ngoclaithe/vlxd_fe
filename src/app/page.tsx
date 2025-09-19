import Image from "next/image";

import Hero from "../components/site/Hero";
import StatsStrip from "../components/site/StatsStrip";
import FeaturesSection from "../components/site/FeaturesSection";
import ShowcaseSection from "../components/site/ShowcaseSection";
import BrandsSection from "../components/site/BrandsSection";
import TestimonialsSection from "../components/site/TestimonialsSection";
import NewsletterSection from "../components/site/NewsletterSection";
import ContactSection from "../components/site/ContactSection";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <StatsStrip />
      <section id="gioi-thieu" className="about-section mx-auto max-w-screen-xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="section-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">Về NovaBuild</h2>
            <p className="mt-3 text-sm text-white/80">
              NovaBuild là đơn vị cung cấp vật liệu xây dựng với hơn 10 năm kinh nghiệm, hệ thống kho bãi rộng khắp và đội ngũ tư vấn kỹ thuật tận tâm. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chính hãng, mức giá cạnh tranh cùng dịch vụ giao hàng nhanh, đồng hành suốt vòng đời công trình.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">CO/CQ đầy đủ</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">Giá tốt theo số lượng</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">Tư vấn kỹ thuật</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 dark:border-white/10">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2.5K+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Khách hàng</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">120+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Đối tác</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Đúng tiến độ</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Đánh giá</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandsSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
}
