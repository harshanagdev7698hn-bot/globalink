"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "buyer" | "consultant" | "lab" | "seller";

export default function SignInPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="border p-2 w-full"
          onChange={(e) => setRole(e.target.value as Role)}
        >
          <option value="buyer">Buyer</option>
          <option value="consultant">Consultant</option>
          <option value="lab">Lab</option>
          <option value="seller">Seller</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}