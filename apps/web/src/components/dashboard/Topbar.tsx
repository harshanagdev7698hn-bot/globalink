"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function titleFromPath(path: string) {
  if (path === "/dashboard") return "Dashboard Overview";
  if (path.includes("/dashboard/consultant")) return "Consultants";
  if (path.includes("/dashboard/lab")) return "Labs";
  if (path.includes("/dashboard/seller")) return "Marketplace";
  if (path.includes("/dashboard/buyer")) return "Leads / Requests";
  if (path.includes("/dashboard/settings")) return "Settings";
  return "Dashboard";
}

export default function Topbar() {
  const pathname = usePathname();
  const title = titleFromPath(pathname);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="rounded-2xl border bg-white/80 backdrop-blur p-4 shadow-sm dark:bg-slate-900/70 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Admin
          </div>
          <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/consultant/new"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:opacity-95"
          >
            <Plus className="h-4 w-4" />
            Add
          </Link>

          <button
            type="button"
            className="rounded-xl border px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800/60"
            onClick={() =>
              setTheme(mounted && currentTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="inline-flex items-center gap-2">
              {mounted && currentTheme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" /> Light
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> Dark
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
