import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    img: "https://vlxdgiatot.com/wp-content/uploads/2024/12/GACH-VIETCERAMICS-SUPER-STONE-AKOYA-612AKIV-612AKIVKRY.jpg",
    name: "GẠCH VIETCERAMICS SUPER STONE AKOYA 612AKIV – 612AKIVKRY",
    price: "1.874.700₫ – 2.329.200₫",
  },
  {
    img: "https://vlxdgiatot.com/wp-content/uploads/2024/12/GACH-VIETCERAMICS-SUPER-STONE-AKOYA-612AKIV-612AKIVKRY.jpg",
    name: "GẠCH VIETCERAMICS SUPER STONE AKOYA 612AKSI – 612AKSIKRY",
    price: "1.874.700₫ – 2.329.200₫",
  },
  {
    img: "https://vlxdgiatot.com/wp-content/uploads/2024/12/GACH-VIETCERAMICS-SUPER-STONE-ALCHEMY-600PXALC1.jpg",
    name: "GẠCH VIETCERAMICS SUPER STONE ALCHEMY 600PXALC1 – 612PXALC1",
    price: "405.000₫ – 468.000₫",
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page mx-auto container-max px-4 py-16 md:px-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Sản phẩm</h1>
        <Link href="/" className="text-sm text-white/80 hover:underline">Quay lại trang chủ</Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <article key={i} className="product-card card overflow-hidden p-4">
            <div className="relative h-48 w-full mb-4">
              <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
            </div>
            <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            <div className="mt-2 text-sm text-white/90">{p.price}</div>
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-full btn-accent px-4 py-2 text-sm">Thêm vào giỏ</button>
              <Link href="#lien-he" className="text-sm text-white/80 hover:underline">Liên hệ</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
