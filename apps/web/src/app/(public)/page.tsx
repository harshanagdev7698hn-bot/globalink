"use client";

import Link from "next/link";
import { useState } from "react";

function Icon({
  type,
}: {
  type: "shield" | "lab" | "doc" | "globe" | "users" | "market";
}) {
  const common = "h-6 w-6";

  if (type === "shield")
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 3 5 6v5c0 4.5 2.9 8.6 7 10 4.1-1.4 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );

  if (type === "lab")
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3M8 15h8" />
      </svg>
    );

  if (type === "doc")
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M6 3h9l3 3v15H6V3Z" />
        <path d="M14 3v4h4M9 13h6M9 17h4" />
      </svg>
    );

  if (type === "users")
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );

  if (type === "market")
    return (
      <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 9h18l-2 12H5L3 9Z" />
        <path d="M7 9a5 5 0 0 1 10 0" />
      </svg>
    );

  return (
    <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9M12 3c-2.3 2.4-3.5 5.4-3.5 9s1.2 6.6 3.5 9" />
    </svg>
  );
}

const stats = [
  ["Verified", "Expert Network"],
  ["Trusted", "Lab Network"],
  ["Compliance", "Coverage"],
  ["Global", "Connections"],
];

const authorityChips = [
  "Verified Compliance Network",
  "Government-ready procurement",
  "Audited Experts",
  "Accredited Labs",
];

const cards = [
  ["Verified Consultants", "Find trusted BIS, ISO, CE and compliance professionals.", "users", "Gujarat", "Industrial", "24h SLA", "Verified since 2021"],
  ["Accredited Labs", "Connect with testing, calibration and inspection labs.", "lab", "India", "Testing", "48h SLA", "Verified since 2020"],
  ["Certification Support", "Get help for documents, testing and audit preparation.", "doc", "Pan India", "Compliance", "2d SLA", "Verified since 2019"],
] as const;

const certs = ["BIS", "ISI Mark", "ISO", "CE", "FDA", "FSSAI", "NABL", "RoHS"];
const trustItems = ["BIS", "NABL", "ISO", "FDA", "FSSAI"];

export default function PublicHomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#04122A]">
      <header className="sticky top-0 z-50 border-b border-[#E6EEF6] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-10">
          <Link href="/" className="flex items-center">
  <img
    src="/images/globalink-main-logo.png.png"
    alt="Globalink"
    className="
    h-[60px]
    w-auto
    object-contain
    "
  />
</Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#334155] lg:flex">
            <Link href="/consultants">Consultants</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className="flex h-10 items-center rounded-[12px] border border-[#E6EEF6] px-5 text-sm font-semibold text-[#1B3554]">
              Sign In
            </Link>
            <Link href="/join" className="flex h-10 items-center rounded-[14px] bg-[#1B3554] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#07223A]">
              Join Globalink
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E6EEF6] bg-white px-6 py-2">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#475569]">
            <div className="flex overflow-x-auto whitespace-nowrap gap-2 pb-1 scrollbar-hide">
              <span className="text-[#6B7280]">Trust infrastructure:</span>
              {trustItems.map((item) => (
                <span key={item} className="rounded-lg border border-[#E6EEF6] bg-white px-3 py-1 text-xs text-[#1B3554]">
                  {item}
                </span>
              ))}
            </div>

            <button onClick={() => setOpen(true)} className="pl-4 text-sm font-semibold text-[#2D6FB7] hover:underline">
              How verification works
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#07223A]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/worldmap-muted.jpg')",
            backgroundPosition: "right center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/82 via-[#071B34]/68 to-[#071B34]/52" />

        <div className="relative mx-auto grid max-w-7xl gap-4 px-4 py-8 md:px-6 md:py-4 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-[600px] rounded-[12px] bg-[#02101E]/15 p-4">
            <div className="inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#DDEBF9]">
              PROCUREMENT-READY COMPLIANCE NETWORK
            </div>

            <h1 className="mt-6 max-w-[620px] text-[40px] md:text-4xl lg:text-[54px] font-extrabold leading-[0.95] tracking-tight text-white md:text-4xl lg:text-[54px]">
              Verified compliance partners for industry procurement.
            </h1>

            <p className="mt-2 max-w-[680px] text-sm font-medium leading-6 text-slate-400">
              Globalink helps industries discover verified consultants, accredited labs,
              certification support and trusted marketplace partners through a structured
              compliance-first network.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {authorityChips.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200/90"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-0">
                  <span className="mr-2 font-black">{value}</span>
                  <span className="text-[#C9E3FB]">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-[720px] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur lg:max-w-[760px]">
              <div className="grid gap-3 md:grid-cols-[145px_1fr_120px]">
                <select className="h-10 w-full rounded-[12px] border border-white/10 bg-white px-3 text-sm font-semibold text-[#04122A] outline-none">
                  <option>Consultant</option>
                  <option>Lab</option>
                  <option>Product</option>
                  <option>Certification</option>
                </select>

                <input
                  type="search"
                  placeholder="Search BIS, ISO, CE, labs or consultants"
                  className="h-10 w-full rounded-[12px] border border-white/10 bg-white px-4 text-sm font-medium text-[#04122A] outline-none"
                />

                <Link href="/consultants" className="flex h-10 items-center justify-center rounded-[12px] bg-[#315EFB] px-5 text-sm font-semibold text-white hover:bg-[#2447D8]">
                  Search
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/consultants" className="flex h-10 items-center rounded-[12px] bg-white px-5 text-sm font-semibold text-[#04122A] hover:bg-[#EAF4FF]">
                Explore Consultants
              </Link>
              <Link href="/labs" className="flex h-10 items-center rounded-[12px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10">
                Find Labs
              </Link>
              <Link href="/procurement" className="flex h-10 items-center rounded-[12px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10">
                Procurement Pack
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-[320px] rounded-[16px] border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9E3FB]">
                TRUST INFRASTRUCTURE
              </p>
              <h3 className="mt-2 text-lg font-black">Government-ready discovery</h3>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["95%", "SLA"],
                  ["2d", "Avg response"],
                  ["120+", "Labs"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[12px] bg-white/10 p-2 text-center">
                    <p className="text-base font-black">{value}</p>
                    <p className="text-[11px] text-[#DDEBF9]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {["✓ KYC Verified", "✓ Audited Labs", "✓ Procurement Ready"].map((item) => (
                  <div key={item} className="flex h-9 items-center rounded-[12px] bg-white/10 px-3 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>

              <button onClick={() => setOpen(true)} className="mt-4 text-sm font-semibold text-[#C9E3FB] hover:underline">
                View verification process →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 px-4 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[12px] border border-[#E6EEF6] bg-white px-3 py-2 shadow-[0_6px_18px_rgba(10,20,40,0.06)]">
          <div className="flex flex-wrap items-center gap-4">
            {["KYC Verified", "Audited Labs", "Document Review", "Procurement Ready"].map((item) => (
              <div key={item} className="rounded-[12px] bg-[#F4F7FB] px-4 py-2 text-sm font-semibold text-[#1B3554]">
                ✓ {item}
              </div>
            ))}
            <button onClick={() => setOpen(true)} className="pl-4 text-sm font-semibold text-[#2D6FB7] hover:underline">
              View verification process →
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 md:px-6 md:py-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#2D6FB7]">
                MARKETPLACE NETWORK
              </p>
              <h2 className="mt-2 text-[28px] font-black text-[#04122A]">
                Start with verified partners
              </h2>
            </div>

            <div className="flex w-full items-center justify-end gap-3 md:w-auto">
              <button className="h-10 rounded-[12px] border border-[#E6EEF6] bg-white px-5 text-sm font-semibold text-[#1B3554]">
                Filters
              </button>
              <button className="h-10 rounded-[12px] border border-[#E6EEF6] bg-white px-5 text-sm font-semibold text-[#1B3554]">
                Export
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map(([title, text, icon, state, industry, sla, verified]) => (
              <div
key={title}
className="mt-3 rounded-[12px] border border-[#E6EEF6] bg-white p-3 shadow-[0_6px_18px_rgba(10,20,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF] p-3 text-[#2D6FB7]">
                  <Icon type={icon} />
                </div>

                <h3 className="text-[18px] font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{text}</p>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 font-medium">
                    4.8 <span className="text-amber-400">★</span>
                  </span>
                  <span className="inline-flex rounded-full bg-slate-50 px-2 py-1">Verified</span>
                  <span className="inline-flex rounded-full bg-slate-50 px-2 py-1">8+ yrs</span>
                  <span className="inline-flex rounded-full bg-slate-50 px-2 py-1">IN</span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">State: {state}</span>
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">Industry: {industry}</span>
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">{sla}</span>
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">{verified}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link href="/consultants" className="rounded-md bg-[#10213F] px-4 py-2 text-sm font-semibold text-white">
                    View
                  </Link>
                  <Link href="/contact" className="rounded-md border border-[#E6EEF6] px-4 py-2 text-sm font-semibold text-[#1B3554]">
                    Inquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-4 md:px-6 md:py-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#2D6FB7]">
              TRUST INFRASTRUCTURE
            </p>
            <h2 className="mt-3 text-[28px] font-black leading-tight">
              Simple, verified and transparent compliance discovery.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#6B7280]">
              Search verified experts, compare profiles, and connect safely with
              consultants, labs and compliance partners.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["01", "Search verified experts, labs or certification categories"],
              ["02", "Compare profiles, ratings and expertise"],
              ["03", "Connect safely and manage compliance needs"],
            ].map(([num, text]) => (
              <div key={num} className="mt-4 flex gap-4 rounded-[12px] border border-[#E6EEF6] bg-[#F8FAFC] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#07223A] text-sm font-black text-white">
                  {num}
                </div>
                <div className="text-base font-black leading-7">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 md:px-6 md:py-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#2D6FB7]">
            CERTIFICATION ECOSYSTEM
          </p>
          <h2 className="mt-3 text-[28px] font-black">
            One trusted platform for compliance support
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {certs.map((item) => (
              <div
key={item}
className="relative rounded-[12px] border border-[#E6EEF6] border-t-4 border-t-[#315EFB]/15 bg-white p-4 shadow-sm hover:border-t-[#315EFB]"
>
                <span className="absolute right-4 top-4 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-[#1B3554]">
                  120 partners
                </span>

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF] p-3 text-[#2D6FB7]">
                  <Icon type="doc" />
                </div>

                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Verified support network
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">SLA: 48h</span>
                  <span className="rounded-lg bg-[#F8FAFC] px-2 py-1">Docs: Verified</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button className="rounded-md bg-[#10213F] px-4 py-2 text-sm font-semibold text-white">
                    View experts
                  </button>
                  <button className="rounded-md border border-[#E6EEF6] px-3 py-2 text-sm text-[#1B3554]">
                    Filter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07223A] px-6 py-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[16px] bg-[#071B34] px-6 py-6 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9DB8F8]">
              PROCUREMENT SAFETY
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Verified procurement starts with controlled discovery.
            </h2>
            <p className="mt-3 max-w-3xl text-[#DDEBF9]">
              Globalink helps industries reduce unverified agents, unclear credentials
              and document risk through procurement-grade trust signals.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-xl">📝</span>
                <div>
                  <div className="font-semibold">Audit logs</div>
                  <div className="text-xs text-slate-400">Full traceability</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">🔒</span>
                <div>
                  <div className="font-semibold">KYC & ID</div>
                  <div className="text-xs text-slate-400">Verified providers</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">⚖️</span>
                <div>
                  <div className="font-semibold">Escrow support</div>
                  <div className="text-xs text-slate-400">Secure transactions</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <div className="font-semibold">Document verification</div>
                  <div className="text-xs text-slate-400">Verified evidence</div>
                </div>
              </div>
            </div>
          </div>

          <Link
href="/join"
className="rounded-xl bg-gradient-to-r from-[#10213F] to-[#18365F] px-7 py-3 text-center font-semibold text-white shadow-[0_10px_24px_rgba(16,33,63,0.18)]"
>
            Start secure procurement
          </Link>
        </div>
      </section>

      <footer className="mt-4 flex flex-col items-center gap-2 bg-white py-4 text-center">
        <p className="font-semibold text-[#1B3554]">Globalink Compliance Network</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
          <span>SSL Secured</span>
          <span>KYC Ready</span>
          <span>Government Trust</span>
          <span>Verified Documents</span>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-[12px] bg-white p-6 shadow-xl">
            <h2 className="text-xl font-black text-[#04122A]">
              How verification works
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">
              Consultants, labs and sellers are reviewed through KYC, document
              verification, credential checks and periodic profile updates.
            </p>

            <ul className="mt-4 space-y-2 text-sm font-semibold text-[#334155]">
              <li>✓ Business and ID verification</li>
              <li>✓ NABL / ISO / certification scope review</li>
              <li>✓ Document and credential validation</li>
              <li>✓ Procurement-ready partner profile</li>
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 h-10 rounded-[12px] bg-[#1B3554] px-5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}