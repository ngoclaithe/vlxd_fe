import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-transparent text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="footer-brand space-y-3">
          <div className="text-xl font-semibold">VLXD NovaBuild</div>
          <p className="text-sm opacity-80">Giải pháp vật liệu xây dựng toàn diện cho nhà ở, công trình dân dụng và dự án doanh nghiệp.</p>
        </div>
        <div className="footer-col">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">Sản phẩm</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="#san-pham" className="hover:underline">Xi măng</Link></li>
            <li><Link href="#san-pham" className="hover:underline">Thép xây dựng</Link></li>
            <li><Link href="#san-pham" className="hover:underline">Gạch ốp lát</Link></li>
            <li><Link href="#san-pham" className="hover:underline">Sơn - chống thấm</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">Hỗ trợ</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="#dich-vu" className="hover:underline">Vận chuyển</Link></li>
            <li><Link href="#dich-vu" className="hover:underline">Bảo hành</Link></li>
            <li><Link href="#lien-he" className="hover:underline">Liên hệ</Link></li>
          </ul>
        </div>
        <div className="footer-contact space-y-2 text-sm">
          <div className="text-sm font-semibold uppercase tracking-wide opacity-70">Liên hệ</div>
          <p>Hotline: <a className="font-medium" href="tel:+84901234567">0901 234 567</a></p>
          <p>Email: <a className="font-medium" href="mailto:hello@novabuild.vn">hello@novabuild.vn</a></p>
          <p>Địa chỉ: 123 Đường Xây Dựng, Q.1, TP.HCM</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-5 text-xs md:px-6">
          <p className="opacity-70">© {new Date().getFullYear()} NovaBuild. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V7a1 1 0 011-1h3V2h-3a5 5 0 00-5 5v2H6v4h3v9h4z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.5-2.6 5.2-2.6 5.5 0 6.5 3.6 6.5 8.2V24h-5V16c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.2V24h-5V8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
