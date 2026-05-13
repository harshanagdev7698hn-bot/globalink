"use client";

import { useState } from "react";
import Link from "next/link";

const roles = ["CONSULTANT", "LAB", "SELLER", "BUYER"];

export default function JoinPage() {
  const [role, setRole] = useState("CONSULTANT");

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-10">
      <div className="mx-auto max-w-5xl rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
              Register with verified business details. Unverified users remain
              pending until Globalink admin review.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D6E2F0] bg-[#F8FAFC] p-5">
            <p className="text-sm font-extrabold text-[#000F22]">
              Verification-first
            </p>
            <p className="mt-2 text-xs leading-5 text-[#6B7280]">
              GST, documents and admin approval help reduce fraud.
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-8">
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
            <Input label="Full Name" placeholder="Enter full name" />
            <Input label="Email" placeholder="you@company.com" />
            <Input label="Password" placeholder="Create password" type="password" />
            <Input label="Phone" placeholder="Mobile number" />
            <Input label="WhatsApp" placeholder="WhatsApp number" />
            <Input label="Company" placeholder="Company / firm name" />
            <Input label="Country" placeholder="India" />
            <Input label="City" placeholder="Ahmedabad" />
          </section>

          {role !== "BUYER" && (
            <section className="rounded-[28px] border border-[#D6E2F0] bg-white p-6">
              <h2 className="text-2xl font-extrabold text-[#000F22]">
                Business Verification
              </h2>

              <p className="mt-2 text-sm text-[#6B7280]">
                These details help Globalink verify your trust level.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Input label="GST Number" placeholder="Enter GST number" />
                <Input label="PAN / Registration" placeholder="Optional" />
                <Input label="Services" placeholder="BIS, ISO, EPR, WPC" />
                <Input label="Experience" placeholder="5 years" />
                <Input label="Starting Price" placeholder="₹15,000 onwards" />

                <div>
                  <label className="text-sm font-extrabold text-[#000F22]">
                    Upload GST Certificate
                  </label>
                  <input
                    type="file"
                    className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm"
                  />
                </div>
              </div>
            </section>
          )}

          <button className="w-full rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#000F22]">
            Submit for Verification
          </button>
        </form>
      </div>
    </main>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-extrabold text-[#000F22]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
      />
    </div>
  );
}