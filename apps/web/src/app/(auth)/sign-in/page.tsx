"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { apiBase } from "@/lib/api";

type Role = "buyer" | "consultant" | "lab" | "seller";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function redirectByRole(role: Role | string | undefined) {
    switch (role) {
      case "consultant":
        router.push("/dashboard/consultant");
        break;
      case "lab":
        router.push("/dashboard/lab");
        break;
      case "seller":
        router.push("/dashboard/seller");
        break;
      default:
        router.push("/dashboard/buyer");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${apiBase}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        throw new Error(data?.message || "Failed to sign in");
      }

      const role: Role | string | undefined =
        data?.user?.role ?? data?.role ?? undefined;

      redirectByRole(role);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl">
        <h1 className="mb-2 text-2xl font-semibold">
          Welcome back to GlobaLink
        </h1>
        <p className="mb-6 text-sm text-slate-400">
          Sign in to manage your jobs, projects, lab tests and marketplace
          orders.
        </p>

        {error && (
          <div className="mb-4 rounded-md border border-red-500/60 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm text-slate-200">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-200">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-400">
          New here?{" "}
          <a href="/sign-up" className="text-cyan-400 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}
