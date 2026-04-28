"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("globalink_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  function logout() {
    localStorage.removeItem("globalink_user");
    localStorage.removeItem("globalink_logged_in");
    router.push("/");
  }

  return (
    <div className="mb-6 flex items-center justify-between rounded-3xl border border-[#dfb6b2] bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm text-[#854F6C]">Globalink Dashboard</p>
        <h2 className="text-2xl font-bold text-[#190019]">Welcome back</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-[#dfb6b2] px-5 py-3">
          <b>{user?.name || "Guest"}</b>
          <p className="text-sm text-[#854F6C]">{user?.role || "GUEST"}</p>
        </div>

        <button onClick={logout} className="rounded-xl bg-[#2B124C] px-5 py-3 font-bold text-white">
          Logout
        </button>
      </div>
    </div>
  );
}