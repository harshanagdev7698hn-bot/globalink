"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        alert("Login failed");
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-[#FBE4D8] px-8 py-8">
      <div className="mx-auto max-w-md rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold text-[#190019]">Login</h1>
        <p className="mt-2 text-sm text-[#854F6C]">
          Login to your Globalink account.
        </p>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Email"
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full rounded-xl border border-[#dfb6b2] px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-xl px-5 py-3 text-sm font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}