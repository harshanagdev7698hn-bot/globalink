"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "CONSULTANT",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created successfully");
        router.push("/sign-in");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-700 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        
        <h1 className="text-2xl font-bold mb-2 text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Join Globalink trusted platform
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}