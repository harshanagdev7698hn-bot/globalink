"use client";

import { useState } from "react";
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const roles = ["BUYER", "CONSULTANT", "LAB", "SELLER"];

export default function JoinPage() {
  const [role, setRole] = useState("BUYER");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [files, setFiles] = useState({
    profileImage: "",
    companyLogo: "",
    office1: "",
    office2: "",
    office3: "",
    gstDocument: "",
    msmeDocument: "",
  });

  async function uploadFile(file: File, key: keyof typeof files) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || data?.error || "Upload failed");
    }

    const url = data.fileUrl || data.url;

    setFiles((prev) => ({
      ...prev,
      [key]: url,
    }));
  }

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof files
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setMessage("Uploading file...");
      await uploadFile(file, key);
      setMessage("File uploaded successfully.");
    } catch {
      setMessage("File upload failed.");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const payload = {
      role,
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      password: String(form.get("password") || ""),
      phone: String(form.get("phone") || ""),
      whatsapp: String(form.get("whatsapp") || ""),
      company: String(form.get("company") || ""),
      country: String(form.get("country") || ""),
      city: String(form.get("city") || ""),
      gstNumber: String(form.get("gstNumber") || ""),
      services: String(form.get("services") || ""),
      experience: String(form.get("experience") || ""),
      pricing: String(form.get("pricing") || ""),
      msmeNumber: String(form.get("msmeNumber") || ""),
      bio: String(form.get("shortBio") || ""),

      profileImage: files.profileImage,
      companyLogo: files.companyLogo,
      officeGallery: [files.office1, files.office2, files.office3].filter(Boolean),
      gstDocument: files.gstDocument,
      msmeDocument: files.msmeDocument,
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Registration failed.");
        return;
      }

      setMessage("Registration successful. Your profile is pending admin verification.");
      e.currentTarget.reset();

      setFiles({
        profileImage: "",
        companyLogo: "",
        office1: "",
        office2: "",
        office3: "",
        gstDocument: "",
        msmeDocument: "",
      });

      setRole("BUYER");
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
        <section className="grid overflow-hidden rounded-[44px] border border-[#D6E2F0] bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative bg-[#000F22] p-8 text-white md:p-12">
            <div className="relative">
              <Link href="/" className="text-4xl font-black tracking-tight">
                Globalink
              </Link>

              <p className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Trusted onboarding
              </p>

              <h1 className="mt-7 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                Join a verified compliance marketplace
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#DCEBFA]">
                Register as a buyer, consultant, lab or seller. Globalink uses verification,
                KYC and admin review to build a trusted compliance ecosystem.
              </p>

              <div className="mt-8 grid gap-4">
                <TrustLine text="GST and business verification" />
                <TrustLine text="Consultants, labs and sellers reviewed by admin" />
                <TrustLine text="Professional marketplace visibility" />
                <TrustLine text="Inquiry and compliance workflow ready" />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
              Create Account
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#000F22]">
              Start your Globalink journey
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <section className="rounded-[28px] border border-[#D6E2F0] bg-[#F8FAFC] p-5">
                <label className="text-sm font-black text-[#000F22]">
                  Select Account Type
                </label>

                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {roles.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setRole(item)}
                      className={`rounded-2xl px-4 py-4 text-xs font-black transition ${
                        role === item
                          ? "bg-[#1B3554] text-white"
                          : "border border-[#D6E2F0] bg-white text-[#1B3554]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
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

              {role !== "BUYER" && (
                <section className="rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
                  <h3 className="text-2xl font-black text-[#000F22]">
                    Business Verification
                  </h3>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Input name="gstNumber" label="GST Number" placeholder="Enter GST number" />
                    <FileUpload label="GST Document" value={files.gstDocument} onChange={(e) => handleFileChange(e, "gstDocument")} />

                    <Input name="msmeNumber" label="MSME / Registration" placeholder="Optional" />
                    <FileUpload label="MSME Document" value={files.msmeDocument} onChange={(e) => handleFileChange(e, "msmeDocument")} />

                    <Input name="services" label="Services" placeholder="BIS, ISO, EPR, WPC" required />
                    <Input name="experience" label="Experience" placeholder="5+ years" required />
                    <Input name="pricing" label="Starting Price" placeholder="₹15,000 onwards" />

                    <div className="md:col-span-2">
                      <label className="text-sm font-black text-[#000F22]">
                        Short Bio
                      </label>
                      <textarea
                        name="shortBio"
                        placeholder="Tell about your expertise and services"
                        className="mt-2 min-h-32 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold outline-none"
                      />
                    </div>

                    <FileUpload label="Profile Photo" value={files.profileImage} onChange={(e) => handleFileChange(e, "profileImage")} />
                    <FileUpload label="Company Logo" value={files.companyLogo} onChange={(e) => handleFileChange(e, "companyLogo")} />
                    <FileUpload label="Office Image 1" value={files.office1} onChange={(e) => handleFileChange(e, "office1")} />
                    <FileUpload label="Office Image 2" value={files.office2} onChange={(e) => handleFileChange(e, "office2")} />
                    <FileUpload label="Office Image 3" value={files.office3} onChange={(e) => handleFileChange(e, "office3")} />
                  </div>
                </section>
              )}

              {message && (
                <div className="rounded-2xl border border-[#D6E2F0] bg-[#EEF7FF] p-4 text-sm font-black text-[#1B3554]">
                  {message}
                </div>
              )}

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-black text-white disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit for Verification"}
              </button>
            </form>
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function Input(props: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-black text-[#000F22]">{props.label}</label>
      <input
        name={props.name}
        required={props.required}
        type={props.type || "text"}
        placeholder={props.placeholder}
        className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold outline-none"
      />
    </div>
  );
}

function FileUpload({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-sm font-black text-[#000F22]">{label}</label>
      <input
        type="file"
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-dashed border-[#9DB8D4] bg-[#F8FAFC] px-4 py-4 text-sm font-bold"
      />
      {value && (
        <p className="mt-2 rounded-xl bg-[#DCFCE7] px-3 py-2 text-xs font-black text-[#166534]">
          Uploaded: {value}
        </p>
      )}
    </div>
  );
}

function TrustLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-sm font-black text-[#166534]">
        ✓
      </span>
      <p className="text-sm font-black text-white">{text}</p>
    </div>
  );
}