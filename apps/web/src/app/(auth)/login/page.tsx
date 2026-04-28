"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("BUYER");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: email.split("@")[0] || "User",
      email,
      role,
    };

    localStorage.setItem("globalink_user", JSON.stringify(user));
    localStorage.setItem("globalink_logged_in", "true");

    alert("Login successful");
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#FBE4D8] p-6">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">Login</h1>
        <p className="mt-2 text-[#854F6C]">Continue to your Globalink account.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-[#dfb6b2] p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="w-full rounded-xl border border-[#dfb6b2] p-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="BUYER">Buyer</option>
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#2B124C] py-3 font-bold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}