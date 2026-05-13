"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem(
      "globalink_user",
      JSON.stringify({
        name: "Globalink User",
        email,
        role: "USER",
      })
    );

    localStorage.setItem("globalink_logged_in", "true");
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-10">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[34px] border border-[#D6E2F0] bg-white shadow-xl lg:grid-cols-2">
        <section className="bg-[#000F22] p-10 text-white">
          <Link href="/" className="text-3xl font-extrabold">
            Globalink
          </Link>

          <h1 className="mt-12 text-4xl font-extrabold leading-tight">
            Login to your trusted compliance workspace
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#C0E6FD]">
            Access verified consultants, labs, marketplace tools and compliance
            workflows from one secure dashboard.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6">
            <p className="text-sm font-bold">Trust-first platform</p>
            <p className="mt-2 text-sm leading-6 text-[#DCEBFA]">
              Built for manufacturers, exporters, consultants and labs who need
              professional compliance discovery.
            </p>
          </div>
        </section>

        <section className="p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
            Secure Login
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#000F22]">
            Welcome back
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#6B7280]">
            Enter your email and password to continue.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-bold text-[#000F22]">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#000F22]">
                Password
              </label>
              <input
                required
                type="password"
                className="mt-2 w-full rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            <button className="w-full rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#000F22]">
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6B7280]">
            New to Globalink?{" "}
            <Link href="/join" className="font-extrabold text-[#1B3554]">
              Create account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}