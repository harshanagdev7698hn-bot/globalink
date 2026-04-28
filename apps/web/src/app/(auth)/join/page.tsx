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

  function handleSubmit(e: any) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    alert("Account created ✅");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#FBE4D8] p-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* 🔥 ROLE DROPDOWN */}
          <select
            className="w-full p-3 border rounded-xl"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="BUYER">Buyer</option>
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
          </select>

          <input
            placeholder="Country"
            className="w-full p-3 border rounded-xl"
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />

          <button className="w-full bg-black text-white py-3 rounded-xl">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}