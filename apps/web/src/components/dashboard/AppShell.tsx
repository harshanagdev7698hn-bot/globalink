"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

type User = {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("globalink_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch {
      setUser(null);
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

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5B86B6]">
                  Globalink Dashboard
                </p>

                <h1 className="mt-2 text-3xl font-extrabold text-[#000F22]">
                  Welcome back
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden rounded-2xl border border-[#D6E2F0] bg-white px-5 py-3 shadow-sm sm:block">
                  <p className="text-sm font-extrabold text-[#000F22]">
                    {user?.name || "Enterprise Workspace"}
                  </p>

                  <p className="text-xs font-medium text-[#6B7280]">
                    Trusted compliance operations
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-2xl bg-[#1B3554] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#000F22]"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}