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
    <header className="site-header sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="main-nav hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-sm font-medium tracking-wide text-gray-700/90 hover:text-gray-900 dark:text-gray-200">
              {l.label}
            </Link>
          ))}
        </nav>

        <button aria-label="Mở menu" className="menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-black/5 text-gray-800 md:hidden dark:bg-white/5 dark:text-gray-100" onClick={() => setOpen((s) => !s)}>
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
        <div className="mobile-menu absolute left-0 right-0 top-full z-40 border-t border-black/5 bg-white/80 px-4 pb-4 pt-2 md:hidden dark:bg-black/60 dark:border-white/5">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 dark:text-gray-200" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
