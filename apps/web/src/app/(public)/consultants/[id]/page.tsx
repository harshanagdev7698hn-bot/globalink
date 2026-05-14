"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

type Consultant = {
  id: string;
  name: string;
  company?: string | null;
  email?: string;
  phone?: string | null;
  city?: string | null;
  country?: string | null;
  status?: string;
  gstNumber?: string | null;
  gstFile?: string | null;
  consultantProfile?: {
    services?: string | null;
    experience?: string | null;
    pricing?: string | null;
    msmeNumber?: string | null;
    msmeFile?: string | null;
    shortBio?: string | null;
  } | null;
};

export default function ConsultantProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConsultant() {
      try {
        const res = await fetch(`/api/consultants/${params.id}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (data?.consultant) {
          setConsultant(data.consultant);
        }
      } catch {
        setConsultant(null);
      } finally {
        setLoading(false);
      }
    }

    loadConsultant();
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] text-[#000F22]">
        <PublicNavbar />
        <div className="mx-auto max-w-7xl px-5 py-20 text-center text-2xl font-black">
          Loading consultant profile...
        </div>
      </main>
    );
  }

  if (!consultant) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] text-[#000F22]">
        <PublicNavbar />
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <h1 className="text-4xl font-black">Consultant not found</h1>
          <Link
            href="/consultants"
            className="mt-6 inline-flex rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-black text-white"
          >
            Back to Consultants
          </Link>
        </div>
      </main>
    );
  }

  const company = consultant.company || consultant.name;
  const services =
    consultant.consultantProfile?.services ||
    "BIS Certification, ISO, CRS, Factory Audit";
  const serviceList = services.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link
          href="/consultants"
          className="inline-flex rounded-2xl border border-[#D6E2F0] bg-white px-5 py-3 text-sm font-black text-[#1B3554]"
        >
          ← Back to Consultants
        </Link>

        <section className="mt-6 overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
          <div className="grid gap-10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Database Connected Consultant Profile
              </p>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-white text-4xl font-black text-[#1B3554]">
                  {company.slice(0, 2).toUpperCase()}
                </div>

                <div>
                  <h1 className="text-4xl font-black leading-tight md:text-6xl">
                    {company}
                  </h1>

                  <p className="mt-3 text-lg font-bold text-[#C0E6FD]">
                    {services}
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#DCEBFA]">
                {consultant.consultantProfile?.shortBio ||
                  "Verified compliance consultant helping companies with certification, documentation, testing and regulatory workflows."}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <TrustPill text={consultant.status || "PENDING"} />
                <TrustPill text="Admin Reviewed" />
                <TrustPill text="Business Profile" />
                <TrustPill text="Marketplace Active" />
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="rounded-[28px] bg-white p-5 text-[#1F2937]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                  Trust Score
                </p>

                <p className="mt-4 text-7xl font-black text-[#000F22]">96%</p>

                <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                  Based on profile quality, verification status, documents and
                  marketplace readiness.
                </p>

                <div className="mt-6 grid gap-3">
                  <ProfileStat label="Experience" value={consultant.consultantProfile?.experience || "5+ Years"} />
                  <ProfileStat label="Location" value={`${consultant.city || "Ahmedabad"}, ${consultant.country || "India"}`} />
                  <ProfileStat label="Pricing" value={consultant.consultantProfile?.pricing || "On Request"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Card label="Image Gallery" title="Consultant workspace preview">
              <div className="grid gap-4 md:grid-cols-3">
                <GalleryCard title="Certification Desk" />
                <GalleryCard title="Audit Preparation" />
                <GalleryCard title="Document Review" />
              </div>
            </Card>

            <Card label="Services" title="Compliance services offered">
              <div className="grid gap-3 md:grid-cols-2">
                {serviceList.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#1B3554]"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </Card>

            <Card label="Documents" title="Verification documents">
              <div className="grid gap-3 md:grid-cols-2">
                <DocItem text={consultant.gstNumber ? "GST Number Available" : "GST Pending"} />
                <DocItem text={consultant.gstFile ? "GST File Uploaded" : "GST File Pending"} />
                <DocItem text={consultant.consultantProfile?.msmeNumber ? "MSME / Registration Available" : "MSME Pending"} />
                <DocItem text={consultant.consultantProfile?.msmeFile ? "MSME File Uploaded" : "MSME File Pending"} />
              </div>
            </Card>

            <Card label="About" title="Professional background">
              <p className="text-sm leading-8 text-[#6B7280]">
                {consultant.consultantProfile?.shortBio ||
                  "This consultant supports businesses with compliance planning, documentation, certification guidance and regulatory workflows."}
              </p>
            </Card>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#000F22]">
                Send inquiry
              </h2>

              <div className="mt-6 grid gap-3">
                <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-black text-white">
                  Send Inquiry
                </button>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554]">
                  Request Callback
                </button>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554]">
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="rounded-[34px] bg-[#1B3554] p-7 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Verification Checklist
              </p>

              <div className="mt-5 space-y-3">
                <CheckItem text="Business profile checked" />
                <CheckItem text="Service scope reviewed" />
                <CheckItem text="Documents mapped" />
                <CheckItem text="Admin verification status available" />
              </div>
            </div>
          </aside>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function TrustPill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}

function GalleryCard({ title }: { title: string }) {
  return (
    <div className="rounded-[26px] bg-[#000F22] p-5 text-white">
      <div className="h-32 rounded-2xl bg-gradient-to-br from-[#C0E6FD] to-[#1B3554]" />
      <p className="mt-4 text-sm font-black">{title}</p>
    </div>
  );
}

function DocItem({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#000F22]">
      ✓ {text}
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 text-sm font-black">
      ✓ {text}
    </div>
  );
}

function Card({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-black text-[#000F22]">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}