"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/consultants", label: "Consultants" },
  { href: "/dashboard/labs", label: "Labs" },
  { href: "/dashboard/marketplace", label: "Marketplace" },
  { href: "/dashboard/certifications", label: "Certifications" },
  { href: "/dashboard/requests", label: "Requests" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-[280px] border-r border-[#D6E2F0] bg-white lg:block">
      <div className="flex h-full flex-col p-6">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-[#000F22]">
            Globalink
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#6B7280]">
            Government-grade consultant, lab & compliance marketplace.
          </p>
        </div>

        <nav className="mt-10 space-y-3">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-2xl px-5 py-4 text-sm font-bold transition ${
                  active
                    ? "bg-[#1B3554] text-white shadow-lg"
                    : "text-[#1F2937] hover:bg-[#EEF4FA]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[28px] border border-[#D6E2F0] bg-[#F8FBFF] p-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#16A34A]" />

            <p className="text-sm font-extrabold text-[#000F22]">
              Trusted Platform
            </p>
          </div>

          <p className="mt-4 text-sm leading-7 text-[#6B7280]">
            Verified consultants, labs and compliance experts only.
          </p>
        </div>
      </div>
    </aside>
  );
}