"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully");

      if (role === "ADMIN") {
        window.location.href = "/dashboard/admin";
      } else if (role === "BUYER") {
        window.location.href = "/dashboard/buyer";
      } else if (role === "CONSULTANT") {
        window.location.href = "/dashboard/consultants";
      } else if (role === "LAB") {
        window.location.href = "/dashboard/labs";
      } else if (role === "SELLER") {
        window.location.href = "/dashboard/marketplace";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FBE4D8] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#dfb6b2] bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#190019]">
          Globalink Signup
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-lg border border-[#dfb6b2] p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-[#dfb6b2] p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border border-[#dfb6b2] p-3"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mb-6 w-full rounded-lg border border-[#dfb6b2] p-3"
        >
          <option value="">Choose Role</option>
          <option value="ADMIN">Admin</option>
          <option value="BUYER">Buyer</option>
          <option value="CONSULTANT">Consultant</option>
          <option value="LAB">Lab</option>
          <option value="SELLER">Seller</option>
        </select>

        <button
          type="button"
          onClick={handleSignup}
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-[#2B124C] to-[#854F6C] p-3 font-semibold text-white"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </div>
    </div>
  );
}