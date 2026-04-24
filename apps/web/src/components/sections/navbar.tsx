"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Consultants", href: "/consultants" },
  { label: "Labs", href: "/labs" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Compliance", href: "/compliance" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfb6b2] bg-white/90 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-md"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            G
          </div>

          <div>
            <p className="text-xl font-bold text-[#190019]">Globalink</p>
            <p className="text-xs text-[#854F6C]">
              Global Procurement • Compliance • Consultancy
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active
                    ? "text-[#190019]"
                    : "text-[#522B5B] hover:text-[#190019]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-xl border border-[#dfb6b2] px-4 py-2 text-sm font-semibold text-[#522B5B] transition hover:bg-[#FBE4D8]"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}