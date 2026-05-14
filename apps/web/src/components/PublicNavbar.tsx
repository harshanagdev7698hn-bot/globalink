import Link from "next/link";

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-3xl font-black tracking-tight text-[#000F22]">
          Globalink
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-[#1F2937] md:flex">
          <Link href="/">Home</Link>
          <Link href="/consultants">Consultants</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-extrabold text-[#1B3554]"
          >
            Home
          </Link>

          <Link
            href="/join"
            className="rounded-xl bg-[#1B3554] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#000F22]"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}