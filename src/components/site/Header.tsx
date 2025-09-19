"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#du-an", label: "Dự án" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />
        <nav className="main-nav hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="#bao-gia" className="cta-quote inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95">
            Nhận báo giá
          </Link>
        </nav>
        <button aria-label="Mở menu" className="menu-toggle inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-gray-700 md:hidden dark:border-white/10 dark:text-gray-200" onClick={() => setOpen((s) => !s)}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="mobile-menu border-t border-black/10 bg-white px-4 pb-4 pt-2 md:hidden dark:border-white/10 dark:bg-black">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link block rounded-md px-2 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="#bao-gia" className="cta-quote inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm" onClick={() => setOpen(false)}>
              Nhận báo giá
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
