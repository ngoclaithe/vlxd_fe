import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand-logo inline-flex items-center gap-3 select-none">
      <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#08323a] to-[#045d6b] text-white shadow-md">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M4 7h16M4 17h16"/>
        </svg>
      </span>
      <span className="brand-name text-lg font-semibold tracking-tight text-white">NovaBuild</span>
    </Link>
  );
}
