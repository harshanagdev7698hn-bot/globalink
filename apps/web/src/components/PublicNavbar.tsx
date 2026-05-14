"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/consultants", label: "Consultants" },
  { href: "/labs", label: "Labs" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* LOGO */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tight text-[#000F22]"
          >
            Globalink
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-[#1F2937] transition hover:text-[#1B3554]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-extrabold text-[#1B3554]"
            >
              Login
            </Link>

            <Link
              href="/join"
              className="rounded-xl bg-[#1B3554] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#000F22]"
            >
              Join
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6E2F0] bg-white md:hidden"
          >
            <div className="space-y-1.5">
              <div className="h-[2px] w-5 bg-[#000F22]" />
              <div className="h-[2px] w-5 bg-[#000F22]" />
              <div className="h-[2px] w-5 bg-[#000F22]" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl">
            {/* TOP */}
            <div className="flex items-center justify-between border-b border-[#D6E2F0] px-6 py-5">
              <h2 className="text-2xl font-black text-[#000F22]">
                Globalink
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E2F0]"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-1 flex-col gap-2 p-5">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-5 py-4 text-base font-black text-[#1F2937] transition hover:bg-[#EEF7FF] hover:text-[#1B3554]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* BOTTOM BUTTONS */}
            <div className="border-t border-[#D6E2F0] p-5">
              <div className="grid gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-center text-sm font-black text-[#1B3554]"
                >
                  Login
                </Link>

                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-black text-white hover:bg-[#000F22]"
                >
                  Join Globalink
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}