"use client";

import { useMemo, useState, type ChangeEvent, type ReactNode } from "react";
import Link from "next/link";

type Role = "BUYER" | "CONSULTANT" | "LAB" | "SELLER" | "MANUFACTURER";

const roles = [
  { key: "BUYER", title: "Buyer", desc: "Sourcing agents & procurement heads", icon: "▣" },
  { key: "CONSULTANT", title: "Consultant", desc: "Compliance & certification experts", icon: "◎" },
  { key: "LAB", title: "Lab", desc: "Testing & calibration facilities", icon: "⌬" },
  { key: "SELLER", title: "Seller", desc: "Manufacturers & authorized dealers", icon: "▤" },
  { key: "MANUFACTURER", title: "Manufacturer", desc: "Industries seeking compliance support", icon: "◫" },
] as const;

const steps = ["Role", "Basic Details", "Verification", "Documents", "Review"];

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>("BUYER");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    whatsapp: "",
    company: "",
    country: "India",
    city: "Ahmedabad",
    gstNumber: "",
    msmeNumber: "",
    services: "",
    experience: "",
    pricing: "",
    shortBio: "",
  });

  const [files, setFiles] = useState({
    profileImage: "",
    companyLogo: "",
    gstDocument: "",
    msmeDocument: "",
    office1: "",
    office2: "",
    office3: "",
  });

  const progress = useMemo(() => (step / 5) * 100, [step]);

  function updateForm(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

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

    setFiles((prev) => ({
      ...prev,
      [key]: data.fileUrl || data.url || "",
    }));
  }

  async function handleFileChange(
    e: ChangeEvent<HTMLInputElement>,
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

  function nextStep() {
    setMessage("");

    if (step === 2) {
      if (!form.name || !form.email || !form.password || !form.phone || !form.country || !form.city) {
        setMessage("Please fill all required basic details.");
        return;
      }
    }

    if (step === 3 && role !== "BUYER") {
      if (!form.services || !form.experience) {
        setMessage("Please fill services and experience.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prevStep() {
    setMessage("");
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setLoading(true);
    setMessage("");

    const payload = {
      role,
      ...form,
      bio: form.shortBio,
      profileImage: files.profileImage,
      companyLogo: files.companyLogo,
      gstDocument: files.gstDocument,
      msmeDocument: files.msmeDocument,
      officeGallery: [files.office1, files.office2, files.office3].filter(Boolean),
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Registration failed.");
        return;
      }

      setMessage("Registration successful. Profile is pending admin verification.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#111827]">
      <section className="mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden bg-[#020817] px-8 py-8 text-white lg:flex lg:flex-col">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#9DB8F8]">
              ◇
            </span>
            <span className="text-2xl font-black text-[#9DB8F8]">Globalink</span>
          </Link>

          <div className="mt-12">
            <h1 className="text-[30px] font-black leading-tight">
              Secure Onboarding
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Join the compliance-ready marketplace with structured verification,
              documents and admin review.
            </p>
          </div>

          <div className="mt-5 space-y-2">
            {steps.map((item, index) => {
              const active = step === index + 1;
              const done = step > index + 1;

              return (
                <div key={item} className="flex items-center gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-black ${
                      active || done
                        ? "border-[#5B7DBA] bg-[#10213F] text-[#9DB8F8]"
                        : "border-slate-700 text-slate-500"
                    }`}
                  >
                    {done ? "✓" : index + 1}
                  </div>

                  <div>
                    <p className={active ? "font-black text-white" : "font-bold text-slate-300"}>
                      Step {index + 1}
                    </p>
                    <p className="text-xs text-slate-500">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-auto border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">🛡</div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                  Procurement Ready
                </p>

                <p className="text-sm font-black">
                  GeM-Style Compliance
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-white/70">
                  <span>500+ Experts</span>
                  <span>120+ Labs</span>
                  <span>40+ Categories</span>
                  <span>96% Trust</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex min-h-screen flex-col">
          <header className="flex min-h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              Creation Wizard
              <span className="mx-2 text-slate-300">›</span>
              <span className="text-[#40598B]">Step {step} of 5</span>
            </div>

            <Link href="/" className="text-sm font-black text-slate-500">
              Exit Process
            </Link>
          </header>

          <div className="flex flex-1 items-start justify-center px-4 py-4 md:px-6 md:py-5">
            <div className="w-full max-w-[760px]">
              <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[#40598B] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 md:p-6">
                {step === 1 && (
                  <StepCard
                    title="Choose your platform role"
                    subtitle="Select the account type that best matches your business operations."
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      {roles.map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setRole(item.key)}
                          className={`flex min-h-[92px] items-center justify-between rounded-[18px] border p-4 text-left transition-all duration-200 hover:shadow-[0_8px_24px_rgba(49,94,251,0.06)] focus:outline-none focus:ring-4 focus:ring-[#315EFB]/20 ${
                            role === item.key
                              ? "border-[#40598B] bg-[#F1F5FF] shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                              : "border-slate-200 bg-white hover:border-[#40598B]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 pt-0.5 text-xl text-[#40598B]">
                              {item.icon}
                            </div>

                            <div>
                              <h3 className="font-black">{item.title}</h3>
                              <p className="mt-1 text-sm leading-5 text-slate-500">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`h-5 w-5 rounded-full border ${
                              role === item.key
                                ? "border-[#40598B] bg-[#40598B]"
                                : "border-slate-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <InfoBox text="Your role determines the verification documents, dashboard tools and marketplace visibility." />
                  </StepCard>
                )}

                {step === 2 && (
                  <StepCard title="Basic account details" subtitle="Create secure login and primary business contact.">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input label="Full Name" value={form.name} onChange={(v) => updateForm("name", v)} required />
                      <Input label="Email" value={form.email} onChange={(v) => updateForm("email", v)} type="email" required />
                      <Input label="Password" value={form.password} onChange={(v) => updateForm("password", v)} type="password" required />
                      <Input label="Phone" value={form.phone} onChange={(v) => updateForm("phone", v)} required />
                      <Input label="WhatsApp" value={form.whatsapp} onChange={(v) => updateForm("whatsapp", v)} />
                      <Input label="Company" value={form.company} onChange={(v) => updateForm("company", v)} />
                      <Input label="Country" value={form.country} onChange={(v) => updateForm("country", v)} required />
                      <Input label="City" value={form.city} onChange={(v) => updateForm("city", v)} required />
                    </div>
                  </StepCard>
                )}

                {step === 3 && (
                  <StepCard title="Verification details" subtitle="Add business and capability information for trust scoring.">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input label="GST Number" value={form.gstNumber} onChange={(v) => updateForm("gstNumber", v)} />
                      <Input label="MSME / Registration" value={form.msmeNumber} onChange={(v) => updateForm("msmeNumber", v)} />
                      <Input label="Services" value={form.services} onChange={(v) => updateForm("services", v)} placeholder="BIS, ISO, EPR, WPC" />
                      <Input label="Experience" value={form.experience} onChange={(v) => updateForm("experience", v)} placeholder="5+ years" />
                      <Input label="Starting Price" value={form.pricing} onChange={(v) => updateForm("pricing", v)} placeholder="₹15,000 onwards" />

                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-slate-900">Short Bio</label>
                        <textarea
                          value={form.shortBio}
                          onChange={(e) => updateForm("shortBio", e.target.value)}
                          placeholder="Tell about your expertise and services"
                          className="mt-2 min-h-[110px] w-full rounded-[14px] border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition focus:border-[#40598B] focus:ring-4 focus:ring-[#DDE8FF]"
                        />
                      </div>
                    </div>
                  </StepCard>
                )}

                {step === 4 && (
                  <StepCard title="Upload verification documents" subtitle="Upload profile, logo and verification files for admin review.">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FileUpload label="Profile Photo" value={files.profileImage} onChange={(e) => handleFileChange(e, "profileImage")} />
                      <FileUpload label="Company Logo" value={files.companyLogo} onChange={(e) => handleFileChange(e, "companyLogo")} />
                      <FileUpload label="GST Document" value={files.gstDocument} onChange={(e) => handleFileChange(e, "gstDocument")} />
                      <FileUpload label="MSME Document" value={files.msmeDocument} onChange={(e) => handleFileChange(e, "msmeDocument")} />
                      <FileUpload label="Office Image 1" value={files.office1} onChange={(e) => handleFileChange(e, "office1")} />
                      <FileUpload label="Office Image 2" value={files.office2} onChange={(e) => handleFileChange(e, "office2")} />
                      <FileUpload label="Office Image 3" value={files.office3} onChange={(e) => handleFileChange(e, "office3")} />
                    </div>
                  </StepCard>
                )}

                {step === 5 && (
                  <StepCard title="Review and submit profile" subtitle="Final check before sending your profile for admin verification.">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Review label="Role" value={role} />
                      <Review label="Name" value={form.name || "Not added"} />
                      <Review label="Email" value={form.email || "Not added"} />
                      <Review label="Company" value={form.company || "Not added"} />
                      <Review label="Location" value={`${form.city}, ${form.country}`} />
                      <Review label="Services" value={form.services || "Not added"} />
                      <Review label="Documents" value={`${Object.values(files).filter(Boolean).length} uploaded`} />
                      <Review label="Trust Status" value="Pending Admin Review" />
                    </div>
                  </StepCard>
                )}

                {message && (
                  <div className="mt-4 rounded-[14px] border border-[#D6E2F0] bg-[#EEF7FF] p-3 text-sm font-semibold text-[#1B3554]">
                    {message}
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className="h-11 rounded-[14px] border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
                  >
                    Back
                  </button>

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="h-12 rounded-[14px] bg-[#40598B] px-6 text-sm font-semibold leading-none text-white shadow-[0_8px_24px_rgba(49,94,251,0.06)] transition hover:bg-[#2447D8]"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="h-12 rounded-[14px] bg-[#40598B] px-6 text-sm font-semibold leading-none text-white shadow-[0_8px_24px_rgba(49,94,251,0.06)] transition hover:bg-[#2447D8] disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit for Verification"}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-8 text-sm leading-none text-slate-500">
                <span>🔒 SSL Secured</span>
                <span>🛡 KYC Ready</span>
                <span>🏛 Government Trust</span>
                <span>📄 Verified Documents</span>
              </div>

              <p className="mt-3 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link href="/login" className="font-black text-[#40598B]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function StepCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[28px] font-black leading-[1.05] text-slate-900">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {subtitle}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function InfoBox({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-[14px] border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
      ℹ️ {text}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-900">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder || label}
        className="mt-2 h-12 w-full rounded-[14px] border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-[#40598B] focus:ring-4 focus:ring-[#DDE8FF]"
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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-900">{label}</label>
      <input
        type="file"
        onChange={onChange}
        className="mt-2 w-full rounded-[14px] border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium"
      />
      {value ? (
        <p className="mt-2 rounded-xl bg-green-50 px-3 py-2 text-xs font-black text-green-700">
          Uploaded: {value}
        </p>
      ) : (
        <p className="mt-2 text-xs font-bold text-slate-400">No file uploaded</p>
      )}
    </div>
  );
}

function Review({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}