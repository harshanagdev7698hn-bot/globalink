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
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Consultants", href: "/dashboard/consultants", icon: Users },
  { label: "Labs", href: "/dashboard/labs", icon: FlaskConical },
  { label: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingBag },
  { label: "Certifications", href: "/dashboard/certifications", icon: ShieldCheck },
  { label: "Requests", href: "/dashboard/requests", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
<<<<<<< HEAD
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("globalink_user");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("User load failed");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("globalink_user");
    localStorage.removeItem("globalink_logged_in");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <header className="sticky top-0 z-40 border-b border-[#D6E2F0] bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5B86B6]">
                  Globalink Dashboard
                </p>

                <h1 className="mt-2 text-4xl font-extrabold text-[#000F22]">
=======
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="flex">
        <aside className="hidden min-h-screen w-[260px] border-r border-[#D6E2F0] bg-white lg:flex lg:flex-col">
          <div className="border-b border-[#D6E2F0] px-7 py-7">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#000F22]">
              Globalink
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Government-grade consultant, lab & compliance marketplace.
            </p>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {menu.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href || pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-bold transition ${
                      active
                        ? "bg-[#1B3554] text-white shadow-sm"
                        : "text-[#1F2937] hover:bg-[#EEF7FF] hover:text-[#1B3554]"
                    }`}
                  >
                    <Icon size={19} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="p-4">
            <div className="rounded-3xl border border-[#D6E2F0] bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#16A34A]" />
                <p className="text-sm font-extrabold text-[#000F22]">
                  Trusted Platform
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Verified consultants, labs and compliance experts only.
              </p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
                  Globalink Dashboard
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-[#000F22]">
>>>>>>> e89014cd7cd3ba1a7386c212034a063ac8da3403
                  Welcome back
                </h2>
              </div>

<<<<<<< HEAD
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-[#D6E2F0] bg-white px-5 py-3 shadow-sm">
                  <p className="text-sm font-extrabold text-[#000F22]">
                    {user?.name || "Enterprise Workspace"}
                  </p>

                  <p className="text-xs font-medium text-[#6B7280]">
=======
              <div className="flex items-center gap-3">
                <div className="hidden rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] px-5 py-3 sm:block">
                  <p className="text-sm font-bold text-[#000F22]">
                    Enterprise Workspace
                  </p>
                  <p className="text-xs text-[#6B7280]">
>>>>>>> e89014cd7cd3ba1a7386c212034a063ac8da3403
                    Trusted compliance operations
                  </p>
                </div>

<<<<<<< HEAD
                <button
                  onClick={handleLogout}
                  className="rounded-2xl bg-[#1B3554] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#000F22]"
                >
=======
                <button className="rounded-2xl bg-[#1B3554] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#000F22]">
>>>>>>> e89014cd7cd3ba1a7386c212034a063ac8da3403
                  Logout
                </button>
              </div>
            </div>
          </header>

<<<<<<< HEAD
          <main className="p-6">{children}</main>
=======
          <main className="px-5 py-8 lg:px-10">{children}</main>
>>>>>>> e89014cd7cd3ba1a7386c212034a063ac8da3403
        </div>
      </div>
    </div>
  );
}