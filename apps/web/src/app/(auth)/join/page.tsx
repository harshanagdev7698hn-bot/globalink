"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const roles = ["CONSULTANT", "LAB", "SELLER", "BUYER"];

export default function JoinPage() {
  const [role, setRole] = useState("CONSULTANT");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      password: String(form.get("password") || ""),
      phone: String(form.get("phone") || ""),
      whatsapp: String(form.get("whatsapp") || ""),
      country: String(form.get("country") || ""),
      city: String(form.get("city") || ""),
      company: String(form.get("company") || ""),
      gstNumber: String(form.get("gstNumber") || ""),
      services: String(form.get("services") || ""),
      experience: String(form.get("experience") || ""),
      pricing: String(form.get("pricing") || ""),
      msmeNumber: String(form.get("msmeNumber") || ""),
      shortBio: String(form.get("shortBio") || ""),
    };

    try {
      const res = await fetch("/api/consultants/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Registration failed");
        return;
      }

      setMessage("Registration successful. Your profile is pending admin verification.");
      e.currentTarget.reset();
      setRole("CONSULTANT");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-xl">
          <div>
            <Link href="/" className="text-3xl font-extrabold text-[#000F22]">
              Globalink
            </Link>

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
              Trusted onboarding
            </p>

            <h1 className="mt-4 text-4xl font-extrabold text-[#000F22]">
              Create Trusted Account
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
              Register with business details. Consultant profiles are visible only after admin verification.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <section className="rounded-[28px] border border-[#D6E2F0] bg-[#F8FAFC] p-6">
              <label className="text-sm font-extrabold text-[#000F22]">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-3 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 font-bold text-[#1B3554] outline-none"
              >
                {roles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <Input name="name" label="Full Name" placeholder="Enter full name" required />
              <Input name="email" label="Email" placeholder="you@company.com" type="email" required />
              <Input name="password" label="Password" placeholder="Create password" type="password" required />
              <Input name="phone" label="Phone" placeholder="Mobile number" required />
              <Input name="whatsapp" label="WhatsApp" placeholder="WhatsApp number" />
              <Input name="company" label="Company" placeholder="Company / firm name" />
              <Input name="country" label="Country" placeholder="India" required />
              <Input name="city" label="City" placeholder="Ahmedabad" required />
            </section>

            {role === "CONSULTANT" && (
              <section className="rounded-[28px] border border-[#D6E2F0] bg-white p-6">
                <h2 className="text-2xl font-extrabold text-[#000F22]">
                  Consultant Verification
                </h2>

                <p className="mt-2 text-sm text-[#6B7280]">
                  These details help Globalink verify your consultant profile.
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Input name="gstNumber" label="GST Number" placeholder="Enter GST number" />
                  <Input name="msmeNumber" label="MSME / Registration" placeholder="Optional" />
                  <Input name="services" label="Services" placeholder="BIS, ISO, EPR, WPC" required />
                  <Input name="experience" label="Experience" placeholder="5 years" />
                  <Input name="pricing" label="Starting Price" placeholder="₹15,000 onwards" />

                  <div className="md:col-span-2">
                    <label className="text-sm font-extrabold text-[#000F22]">
                      Short Bio
                    </label>
                    <textarea
                      name="shortBio"
                      placeholder="Tell about your expertise"
                      className="mt-2 min-h-32 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                    />
                  </div>
                </div>
              </section>
            )}

            {message && (
              <div className="rounded-2xl border border-[#D6E2F0] bg-[#EEF7FF] p-4 text-sm font-bold text-[#1B3554]">
                {message}
              </div>
            )}

            <button
              disabled={loading}
              className="w-full rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#000F22] disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit for Verification"}
            </button>
          </form>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-extrabold text-[#000F22]">{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
      />
    </div>
  );
}