"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#du-an", label: "Dự án" },
  { href: "#khong-gian-song", label: "Không gian sống" },
  { href: "#tin-tuc", label: "Tin tức" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="main-nav hidden items-center gap-8 md:flex">
          {/* Products dropdown */}
          <div className="relative group">
            <Link href="/products" className="nav-link text-sm font-medium tracking-wide text-white/90 hover:text-white inline-flex items-center gap-2">Sản phẩm
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" />
              </svg>
            </Link>

            <div className="absolute left-0 top-full mt-3 hidden w-72 max-h-[60vh] overflow-auto rounded-lg bg-black/95 border border-white/6 p-3 shadow-2xl backdrop-blur-md group-hover:block group-focus-within:block z-50">
              <ul className="grid gap-1">
                {[
                  'Gạch ốp lát','Gương','Vật liệu mặt dựng','Vật liệu ốp trần','Vật liệu ốp tường','Nội thất','Rèm Cửa','Sàn gỗ','Sàn vinyl','Thảm trải sàn','Thiết bị gia dụng','Thiết bị vệ sinh'
                ].map((c) => (
                  <li key={c}>
                    <Link href={`/products?category=${encodeURIComponent(c)}`} className="block rounded px-3 py-2 text-sm text-white hover:bg-white/6">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Brands dropdown */}
          <div className="relative group">
            <Link href="#brands" className="nav-link text-sm font-medium tracking-wide text-white/90 hover:text-white inline-flex items-center gap-2">Thương hiệu
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" />
              </svg>
            </Link>
            <div className="absolute left-0 top-full mt-3 hidden w-80 max-h-[60vh] overflow-auto rounded-lg bg-black/95 border border-white/6 p-4 shadow-2xl backdrop-blur-md group-hover:block group-focus-within:block z-50">
              <div className="grid grid-cols-2 gap-2">
                {[
                  'An Cường','Basic','Bosch','Caesar','Đồng Tâm','Kaff','Eurotile','Glasso','WMF','Pare','IVC','Hafele','Happy Home','Viva Home','Inax','Malloca','Moodflor','Super Stone','Viva','Taicera','Tarkett','Thu Hương','Toto','Trenco','Vietceramics','Viglacera','No Brand'
                ].map((b) => (
                  <Link key={b} href={`/brands?brand=${encodeURIComponent(b)}`} className="block rounded px-3 py-2 text-sm text-white hover:bg-white/6">{b}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          {NAV_LINKS.filter(l => l.label !== 'Sản phẩm' && l.label !== 'Thương hiệu').map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-sm font-medium tracking-wide text-white/90 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <button aria-label="Mở menu" className="menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent bg-white/5 text-white md:hidden" onClick={() => setOpen((s) => !s)}>
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
        <div className="mobile-menu absolute left-0 right-0 top-full z-50 px-4 pb-4 pt-2 md:hidden bg-black/95 backdrop-blur-md rounded-b-lg">
          <div className="flex flex-col gap-3">
            <div>
              <div className="font-medium text-white/90 px-3 py-2">Sản phẩm</div>
              <div className="grid gap-1 px-2">
                {[
                  'Gạch ốp lát','Gương','Vật liệu mặt dựng','Vật liệu ốp trần','Vật liệu ốp tường','Nội thất','Rèm Cửa','Sàn gỗ','Sàn vinyl','Thảm trải sàn','Thiết bị gia dụng','Thiết bị vệ sinh'
                ].map((c) => (
                  <Link key={c} href={`/products?category=${encodeURIComponent(c)}`} className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/6" onClick={() => setOpen(false)}>{c}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-medium text-white/90 px-3 py-2">Thương hiệu</div>
              <div className="grid gap-1 px-2">
                {[
                  'An Cường','Basic','Bosch','Caesar','Đồng Tâm','Kaff','Eurotile','Glasso','WMF','Pare','IVC','Hafele','Happy Home','Viva Home','Inax','Malloca','Moodflor','Super Stone','Viva','Taicera','Tarkett','Thu Hương','Toto','Trenco','Vietceramics','Viglacera','No Brand'
                ].map((b) => (
                  <Link key={b} href={`/brands?brand=${encodeURIComponent(b)}`} className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/6" onClick={() => setOpen(false)}>{b}</Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.filter(l => l.label !== 'Sản phẩm' && l.label !== 'Thương hiệu').map((l) => (
              <Link key={l.href} href={l.href} className="nav-link block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/6" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
