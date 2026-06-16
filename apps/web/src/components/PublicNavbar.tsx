"use client";

import Link from "next/link";
import { useState } from "react";
const links = [
  { href: "/consultants", label: "Consultants" },
  { href: "/labs", label: "Labs" },
  { href: "/certifications", label: "Certifications" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
{/* LOGO */}
<Link
  href="/"
  className="flex items-center gap-3"
>

  {/* MAIN LOGO */}
  <img
    src="/images/globalink-main-logo.png.png"
    alt="Globalink"
    className="
      h-auto
      w-[120px]
      object-contain
    "
  />

</Link>
          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                text-[14px]
                font-bold
                text-slate-700
                transition
                hover:text-[#123A68]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden items-center gap-4 lg:flex">

            <Link
              href="/login"
              className="
              rounded-xl
              border
              border-slate-300
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-[#071426]
              transition
              hover:border-[#123A68]
              "
            >
              Sign In
            </Link>

            <Link
              href="/join"
              className="
              rounded-xl
              bg-[#1B3554]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-blue-900/20
              transition
              hover:bg-[#10263E]
              "
            >
              Join Globalink
            </Link>
          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(true)}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-slate-300
            lg:hidden
            "
          >
            ☰
          </button>
        </div>

        {/* TRUST STRIP */}
        <div className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-5 py-3">

            {[
              "BIS",
              "ISO",
              "CE",
              "FDA",
              "FSSAI",
              "NABL",
            ].map((item) => (
              <div
                key={item}
                className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-xs
                font-black
                text-[#123A68]
                "
              >
                {item}
              </div>
            ))}

            <div className="ml-auto hidden gap-3 xl:flex">

              <span className="rounded-full bg-[#E8F3FF] px-4 py-2 text-xs font-black text-[#123A68]">
                Verified Consultants
              </span>

              <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#123A68]">
                Accredited Labs
              </span>

              <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#123A68]">
                Compliance Support
              </span>

              <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#123A68]">
                Secure Marketplace
              </span>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE PANEL */}
      {open && (
        <div className="fixed inset-0 z-[80] bg-black/50 lg:hidden">

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-6">

              <div>
                <div className="text-2xl font-black">
                  Globalink
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Compliance Network
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                h-10
                w-10
                rounded-lg
                border
                "
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-2 p-5">

              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  rounded-xl
                  px-5
                  py-4
                  text-sm
                  font-bold
                  text-slate-700
                  hover:bg-slate-100
                  "
                >
                  {item.label}
                </Link>
              ))}

            </nav>

            <div className="border-t p-5">

              <div className="grid gap-3">

                <Link
                  href="/login"
                  className="
                  rounded-xl
                  border
                  px-5
                  py-4
                  text-center
                  font-bold
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="/join"
                  className="
                  rounded-xl
                  bg-[#1B3554]
                  px-5
                  py-4
                  text-center
                  font-bold
                  text-white
                  "
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