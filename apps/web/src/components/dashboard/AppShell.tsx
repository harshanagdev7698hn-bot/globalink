"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();

        if (data?.user) {
          setUser(data.user);
          localStorage.setItem("globalink_user", JSON.stringify(data.user));
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error("API user fetch failed");
      }

      try {
        const savedUser = localStorage.getItem("globalink_user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("globalink_user");

      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      window.location.href = "/login";
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBE4D8]">
      <div className="page-container py-6">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Sidebar />

          <div className="min-w-0 space-y-6">
            <div className="glass-panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[#854F6C]">Globalink Dashboard</p>
                <h1 className="text-2xl font-bold text-[#190019]">
                  Welcome back
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-[#dfb6b2] bg-white px-4 py-3 shadow-sm">
                  {loading ? (
                    <>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfb6b2] font-bold text-[#190019]">
                        ...
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-[#190019]">Loading...</p>
                        <p className="text-[#854F6C]">Please wait</p>
                      </div>
                    </>
                  ) : user ? (
                    <>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B124C] font-bold text-white">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-[#190019]">{user.name}</p>
                        <p className="uppercase tracking-wide text-[#854F6C]">
                          {user.role}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfb6b2] font-bold text-[#190019]">
                        G
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-[#190019]">Guest</p>
                        <p className="text-[#854F6C]">Not logged in</p>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}