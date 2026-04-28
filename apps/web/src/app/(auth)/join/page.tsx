"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "BUYER",
    country: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role,
      country: form.country,
    };

    localStorage.setItem("globalink_user", JSON.stringify(user));
    localStorage.setItem("globalink_logged_in", "true");

    alert("Account created successfully");
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#FBE4D8] p-6">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input required placeholder="Full Name" className="w-full rounded-xl border p-3" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border p-3" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input required type="password" placeholder="Password" className="w-full rounded-xl border p-3" onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <select className="w-full rounded-xl border p-3" onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="BUYER">Buyer</option>
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
          </select>

          <input placeholder="Country" className="w-full rounded-xl border p-3" onChange={(e) => setForm({ ...form, country: e.target.value })} />

          <button className="w-full rounded-xl bg-[#2B124C] py-3 font-bold text-white">
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}