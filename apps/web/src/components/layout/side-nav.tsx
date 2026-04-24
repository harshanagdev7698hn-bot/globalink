"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Consultants", href: "/dashboard/consultants" },
  { label: "Labs", href: "/dashboard/labs" },
  { label: "Marketplace", href: "/dashboard/marketplace" },
  { label: "Requests", href: "/dashboard/requests" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="glass-panel h-fit w-full p-4 lg:w-72">
      <div className="mb-6 border-b border-[#dfb6b2] pb-4">
        <h2 className="text-2xl font-bold text-[#190019]">GlobaLink</h2>
        <p className="text-sm text-[#854F6C]">Government-grade dashboard</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                  ? "text-white shadow-md"
                  : "text-[#522B5B] hover:bg-[#FBE4D8]"
              }`}
              style={
                active
                  ? {
                      background:
                        "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                    }
                  : undefined
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-[#dfb6b2] bg-[#FBE4D8] p-4">
        <p className="text-sm font-semibold text-[#190019]">Trust status</p>
        <p className="mt-2 text-sm text-[#854F6C]">
          Add consultants, labs and compliance records to make the platform look more official and data-rich.
        </p>
      </div>
    </aside>
  );
}