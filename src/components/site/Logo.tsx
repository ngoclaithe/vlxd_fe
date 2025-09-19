import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand-logo inline-flex items-center gap-2 select-none">
      <span aria-hidden className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"/>
          <path d="M5 21V9l7-6 7 6v12"/>
          <path d="M9 21v-6h6v6"/>
        </svg>
      </span>
      <span className="brand-name text-lg font-semibold tracking-tight">VLXD NovaBuild</span>
    </Link>
  );
}
