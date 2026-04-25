"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "BUYER" | "CONSULTANT" | "LAB" | "SELLER";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("BUYER");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Signup failed");
      return;
    }

    alert("Account created successfully");
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#FBE4D8] px-6 py-10">
      <div className="mx-auto max-w-xl rounded-[28px] border border-[#dfb6b2] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#190019]">Create Account</h1>
        <p className="mt-2 text-sm text-[#854F6C]">
          Register as buyer, consultant, lab or seller.
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <input
            required
            placeholder="Full Name"
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type="password"
            placeholder="Password"
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            <option value="BUYER">Buyer</option>
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
          </select>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-[#2B124C] px-5 py-3 font-bold text-white"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </main>
  );
}
