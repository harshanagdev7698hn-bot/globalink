"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Admin", href: "/dashboard/admin" },
  { label: "Consultants", href: "/dashboard/consultants" },
  { label: "Labs", href: "/dashboard/labs" },
  { label: "Marketplace", href: "/dashboard/marketplace" },
  { label: "Certifications", href: "/dashboard/certifications" },
  { label: "Requests", href: "/dashboard/requests" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("globalink_user");
    localStorage.removeItem("globalink_logged_in");
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-[#E5E7EB] bg-[#10243E] p-6 text-white lg:block">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold tracking-tight">Globalink</h1>
          <p className="mt-1 text-sm text-slate-300">
            Trusted compliance platform
          </p>
        </Link>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-[#10243E]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-semibold text-white">Trust status</p>
          <p className="mt-2 text-xs leading-5 text-slate-300">
            KYC, verified consultants, labs and compliance workflows make
            Globalink more trusted.
          </p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/90 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                Globalink Dashboard
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#10243E]">
                Welcome back
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 sm:block">
                <p className="text-sm font-bold text-[#10243E]">Admin User</p>
                <p className="text-xs text-[#6B7280]">Verified workspace</p>
              </div>

              <button
                onClick={logout}
                className="rounded-xl bg-[#10243E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173252]"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="min-h-screen bg-[#F8FAFC]">{children}</main>
      </div>
    </div>
  );
}