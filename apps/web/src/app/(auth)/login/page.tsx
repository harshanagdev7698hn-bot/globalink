"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem(
      "globalink_user",
      JSON.stringify({
        name: "Globalink User",
        email,
        role: "USER",
        remember,
      })
    );

    localStorage.setItem("globalink_logged_in", "true");

    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 400);
  }

  return (
    <main className="min-h-screen bg-[#F6F8FB] px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4 flex items-center justify-between rounded-2xl border border-[#D6E2F0] bg-white px-5 py-3 shadow-sm">
          <Link href="/" className="text-3xl font-black text-[#000F22]">
            Globalink
          </Link>

          <div className="hidden items-center gap-5 text-xs font-extrabold text-[#334155] md:flex">
            <span>BIS</span>
            <span>NABL</span>
            <span>ISO</span>
            <span>FDA</span>
            <span>FSSAI</span>
            <Link href="/verification" className="text-[#1B3554]">
              How Verification Works
            </Link>
          </div>

          <Link
            href="/join"
            className="rounded-xl bg-[#1B3554] px-4 py-2 text-sm font-black text-white transition hover:bg-[#000F22]"
          >
            Join
          </Link>
        </header>

        <div className="grid overflow-hidden rounded-[28px] border border-[#D6E2F0] bg-white shadow-xl lg:min-h-[calc(100vh-110px)] lg:grid-cols-[320px_minmax(0,1fr)]">
          <section className="hidden bg-[#020817] px-6 py-6 text-white lg:flex lg:flex-col lg:w-[320px]">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#9CCCF2]">
              Secure Compliance Workspace
            </p>

            <h1 className="mt-4 text-[30px] font-black leading-[1.08]">
              Trusted access for compliance teams
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#C8DDF2]">
              Manage consultants, accredited labs, product compliance, documents
              and verification workflows from one secure dashboard.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              {[
                ["500+", "Experts"],
                ["120+", "Labs"],
                ["96%", "Trust"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/10 px-3 py-3"
                >
                  <p className="text-xl font-black leading-6">{value}</p>
                  <p className="mt-1 text-xs text-[#C8DDF2]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {["✓ KYC Verified", "✓ Audited Labs", "✓ Procurement Ready"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex h-11 items-center rounded-xl border border-white/10 bg-white/10 px-4 text-sm font-black"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                href="/contact"
                className="flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-black text-[#000F22] transition hover:bg-[#EAF4FF]"
              >
                Request Demo
              </Link>

              <Link
                href="/procurement"
                className="flex h-11 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                Procurement Pack
              </Link>
            </div>

            <p className="mt-auto border-t border-white/10 pt-6 text-sm leading-6 text-[#C8DDF2]">
              Choose your role during signup: Consultant, Lab, Buyer, Seller or
              Manufacturer.
            </p>
          </section>

          <section className="flex flex-1 items-center justify-center px-4 py-6 md:px-8 md:py-8">
            <div className="w-full max-w-[620px]">
              <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm md:p-6">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#5B86B6]">
                  Secure Login
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#000F22]">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Accounts accessing verified reports may require KYC
                  verification.
                </p>

                <form onSubmit={handleLogin} className="mt-5 space-y-4">
                  <div>
                    <label className="text-sm font-bold text-[#000F22]">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-2 h-12 w-full rounded-xl border border-[#D6E2F0] px-4 text-sm outline-none transition focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-[#000F22]">
                      Password
                    </label>
                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="mt-2 h-12 w-full rounded-xl border border-[#D6E2F0] px-4 text-sm outline-none transition focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                    />
                  </div>

                  <div className="flex min-h-10 items-center justify-between text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-[#4B5563]">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 cursor-pointer rounded border-[#D6E2F0] accent-[#1B3554] appearance-auto"
                      />
                      Remember me
                    </label>

                    <Link
                      href="/forgot-password"
                      className="font-black text-[#1B3554]"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                   className="h-14 w-full rounded-xl bg-[#1B3554] px-8 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(27,53,84,0.12)] transition hover:bg-[#10213F] disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Login"}
                  </button>
                </form>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button className="h-12 rounded-xl border border-[#D6E2F0] bg-white text-sm font-black text-[#000F22] transition hover:bg-[#F8FAFC]">
                    Microsoft / Azure AD
                  </button>

                  <button className="h-12 rounded-xl border border-[#D6E2F0] bg-white text-sm font-black text-[#000F22] transition hover:bg-[#F8FAFC]">
                    Google
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4">
                  <p className="text-sm font-black text-[#000F22]">
                    New to Globalink?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    Choose role in signup: Consultant / Lab / Buyer / Seller /
                    Manufacturer.
                  </p>

                  <Link
                    href="/join"
                    className="mt-3 inline-flex rounded-xl bg-[#EAF4FF] px-4 py-2 text-sm font-black text-[#1B3554]"
                  >
                    Create account
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#6B7280]">
                <Link href="/privacy">Privacy</Link>
                <span>•</span>
                <Link href="/terms">Terms</Link>
                <span>•</span>
                <Link href="/help">Help</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}