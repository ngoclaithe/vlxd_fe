import Image from "next/image";

const BRANDS = [
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/logo-go-an-cuong.jpeg", alt: "Gỗ An Cường" },
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/logo-bosch.jpeg", alt: "Bosch" },
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/vn.jpg", alt: "Vietnam Brand" },
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/trenco.jpg", alt: "Trenco" },
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/logo-hafele-1.png", alt: "Hafele" },
  { src: "https://vlxdgiatot.com/wp-content/uploads/2023/08/INAX-LOGO.jpeg", alt: "INAX" },
];

export default function BrandsSection() {
  return (
    <section className="brands-section mx-auto container-max px-4 py-12 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Thương hiệu nổi bật</h3>
        <p className="text-sm text-muted">Các thương hiệu uy tín mà chúng tôi phân phối</p>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {BRANDS.map((b, i) => (
          <div key={i} className="brand-card card flex items-center justify-center p-4">
            <div className="relative h-12 w-24 opacity-95">
              <Image src={b.src} alt={b.alt} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
