"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FlaskConical,
  ShoppingBag,
  ShieldCheck,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Consultants",
    href: "/consultants",
    icon: Users,
  },
  {
    label: "Labs",
    href: "/labs",
    icon: FlaskConical,
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: ShoppingBag,
  },
  {
    label: "Certifications",
    href: "/certifications",
    icon: ShieldCheck,
  },
  {
    label: "Requests",
    href: "/requests",
    icon: FileText,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden w-[280px] border-r border-[#E5E7EB] bg-white lg:flex lg:flex-col">
          {/* LOGO */}
          <div className="border-b border-[#E5E7EB] px-8 py-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#10243E]">
              Globalink
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Government-grade consultant, lab & compliance marketplace.
            </p>
          </div>

          {/* MENU */}
          <nav className="flex-1 px-5 py-6">
            <div className="space-y-2">
              {menu.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-[#10243E] text-white shadow-sm"
                        : "text-[#374151] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* TRUST CARD */}
          <div className="p-5">
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#16A34A]" />

                <p className="text-sm font-bold text-[#10243E]">
                  Trusted Platform
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Verified consultants, labs and compliance experts only.
              </p>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <div className="flex-1">
          {/* TOPBAR */}
          <header className="border-b border-[#E5E7EB] bg-white">
            <div className="flex items-center justify-between px-6 py-5 lg:px-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                  Globalink Dashboard
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#10243E]">
                  Welcome back
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-5 py-3 sm:block">
                  <p className="text-sm font-semibold text-[#10243E]">
                    Enterprise Workspace
                  </p>

                  <p className="text-xs text-[#6B7280]">
                    Trusted compliance operations
                  </p>
                </div>

                <button className="rounded-2xl bg-[#10243E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173252]">
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <main className="px-6 py-8 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}