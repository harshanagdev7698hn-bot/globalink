"use client";

import { useState } from "react";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const payload = {
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""),
      requirement: String(form.get("requirement") || ""),
      source: "CONTACT_PAGE",
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Something went wrong.");
        return;
      }

      setMessage("Inquiry submitted successfully. Globalink team will contact you soon.");
      e.currentTarget.reset();
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-[40px] bg-[#000F22] p-8 text-white shadow-2xl md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
            Contact Globalink
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Need help finding trusted compliance support?
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Share your requirement and Globalink will help you connect with verified consultants, labs and marketplace partners.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Support Details
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#000F22]">
              Globalink Support
            </h2>

            <div className="mt-7 space-y-4">
              <Info label="Email" value="support@globalink.com" />
              <Info label="Phone" value="+91 00000 00000" />
              <Info label="Location" value="India" />
              <Info label="Support Type" value="Consultants, Labs, Sellers" />
            </div>
          </aside>

          <section className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-[#000F22]">
              Send Inquiry
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              This form now saves your inquiry into the Globalink database.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5 md:grid-cols-2">
              <Input name="fullName" label="Full Name" placeholder="Enter name" required />
              <Input name="email" label="Email" placeholder="you@company.com" type="email" required />
              <Input name="phone" label="Phone" placeholder="Mobile number" />
              <Input name="company" label="Company" placeholder="Company name" />

              <div className="md:col-span-2">
                <label className="text-sm font-black text-[#000F22]">
                  Requirement
                </label>
                <textarea
                  name="requirement"
                  required
                  placeholder="Example: Need BIS consultant for toy manufacturing"
                  className="mt-2 min-h-36 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                />
              </div>

              {message && (
                <div className="md:col-span-2 rounded-2xl border border-[#D6E2F0] bg-[#EEF7FF] p-4 text-sm font-black text-[#1B3554]">
                  {message}
                </div>
              )}

              <button
                disabled={loading}
                className="md:col-span-2 rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-black text-white hover:bg-[#000F22] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </section>
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
      <label className="text-sm font-black text-[#000F22]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
      />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5B86B6]">
        {label}
      </p>
      <p className="mt-3 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}