"use client";

import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  role: string;
};

export default function TopNav() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/me");
      const data = await res.json();
      setUser(data.user);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#dfb6b2] bg-white px-6 py-4 shadow-sm">
      <div>
        <p className="text-sm text-[#854F6C]">Globalink Dashboard</p>
        <h1 className="text-2xl font-bold text-[#190019]">Welcome back</h1>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3 rounded-xl border border-[#dfb6b2] bg-[#FBE4D8] px-4 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B124C] font-bold text-white">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div className="text-sm">
              <p className="font-semibold text-[#190019]">{user.name}</p>
              <p className="text-[#854F6C]">{user.role}</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[#dfb6b2] bg-[#FBE4D8] px-4 py-2 text-sm text-[#190019]">
            Guest
          </div>
        )}

        <button
          onClick={handleLogout}
          className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}