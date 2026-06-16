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

const trustItems = [
  "KYC review",
  "Admin approved profiles",
  "Document credential check",
  "Partner discovery",
];

const whyGlobalink = [
  {
    title: "Verified Consultant Discovery",
    text: "Find compliance consultants with reviewed profiles, service scope and business details.",
    icon: "users",
  },
  {
    title: "Accredited Lab Discovery",
    text: "Discover lab partners through structured profile and credential review.",
    icon: "lab",
  },
  {
    title: "Compliance Support Network",
    text: "Connect with professionals for documentation, testing coordination and audit support.",
    icon: "doc",
  },
  {
    title: "Marketplace Connections",
    text: "Explore verified marketplace partners through inquiry-based compliance discovery.",
    icon: "market",
  },
] as const;

const popularSearches = [
  "BIS Consultant",
  "ISI Mark",
  "CDSCO",
  "FSSAI",
  "WPC",
  "TEC",
  "NABL Labs",
  "Legal Metrology",
];

const marketplaceCards = [
  {
    title: "Verified Consultants",
    text: "Discover compliance consultants for BIS, ISI, ISO, CE and certification support requirements.",
    icon: "users",
    tags: ["Admin approved profiles", "Service scope visible", "Inquiry-based connection"],
    href: "/consultants",
  },
  {
    title: "Testing & Lab Network",
    text: "Find labs and testing partners with profile information, service categories and verification signals.",
    icon: "lab",
    tags: ["Credential review", "Testing support", "Location-based search"],
    href: "/labs",
  },
  {
    title: "Certification Support",
    text: "Connect with professionals for documentation, testing coordination and audit preparation support.",
    icon: "doc",
    tags: ["Document support", "Scope guidance", "Compliance review"],
    href: "/certifications",
  },
] as const;

const featuredProfiles = [
  {
    title: "Verified Consultant",
    badge: "Admin Reviewed",
    meta: ["Ahmedabad", "8+ Years", "BIS / ISI / CRS"],
    icon: "users",
  },
  {
    title: "Accredited Lab",
    badge: "Lab Discovery",
    meta: ["NABL", "Testing Categories", "Credential Review"],
    icon: "lab",
  },
  {
    title: "Seller",
    badge: "Marketplace",
    meta: ["Verified Supplier", "Product Discovery", "Inquiry Based"],
    icon: "market",
  },
] as const;

const verificationSteps = [
  ["01", "Profile submission", "Consultants, labs and sellers submit business, service and contact information."],
  ["02", "KYC review", "Identity, business and available credential documents are reviewed before public visibility."],
  ["03", "Admin approval", "Profiles are approved, rejected or kept pending based on verification status."],
  ["04", "Safe discovery", "Industries search verified profiles and connect through inquiry-based discovery."],
];

const users = [
  "Manufacturers",
  "Importers",
  "Exporters",
  "Startups",
  "MSMEs",
  "Enterprises",
];

const certs = [
  ["BIS", "25 Experts"],
  ["ISI Mark", "18 Consultants"],
  ["CDSCO", "12 Partners"],
  ["WPC", "10 Partners"],
  ["TEC", "8 Partners"],
  ["EPR", "14 Consultants"],
  ["Legal Metrology", "9 Partners"],
  ["NABL", "12 Labs"],
];

const networkStats = [
  ["250+", "Profiles"],
  ["80+", "Labs"],
  ["20+", "Categories"],
  ["1000+", "Connections"],
];

const successStories = [
  "Consumer Electronics",
  "Food Products",
  "Medical Devices",
  "Telecom Equipment",
];

export default function PublicHomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#04122A]">
      <header className="sticky top-0 z-50 border-b border-[#E6EEF6] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-10">
          <Link href="/" className="flex items-center">
            <img
              src="/images/globalink-main-logo.png.png"
              alt="Globalink"
              className="h-[56px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#334155] lg:flex">
            <Link href="/consultants" className="hover:text-[#315EFB]">Consultants</Link>
            <Link href="/labs" className="hover:text-[#315EFB]">Labs</Link>
            <Link href="/certifications" className="hover:text-[#315EFB]">Certifications</Link>
            <Link href="/marketplace" className="hover:text-[#315EFB]">Marketplace</Link>
            <Link href="/resources" className="hover:text-[#315EFB]">Resources</Link>
            <Link href="/about" className="hover:text-[#315EFB]">About</Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className="flex h-10 items-center rounded-[12px] border border-[#E6EEF6] px-5 text-sm font-semibold text-[#1B3554] hover:bg-[#F8FAFC]">
              Sign In
            </Link>
            <Link href="/join" className="flex h-10 items-center rounded-[14px] bg-[#1B3554] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#07223A]">
              Join Globalink
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E6EEF6] bg-white px-4 py-2 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#475569]">
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
              <span className="text-[#6B7280]">Trust layer:</span>
              {trustItems.map((item) => (
                <span key={item} className="rounded-lg border border-[#E6EEF6] bg-white px-3 py-1 text-[#1B3554]">
                  {item}
                </span>
              ))}
            </div>

            <button onClick={() => setOpen(true)} className="text-sm font-semibold text-[#315EFB] hover:underline">
              How verification works
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#07223A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/images/worldmap-muted.jpg')",
            backgroundPosition: "right center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06172D] via-[#071B34]/90 to-[#071B34]/70" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 md:py-14 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:px-10">
          <div className="max-w-[680px]">
            <div className="inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#DDEBF9]">
              Compliance marketplace for verified discovery
            </div>

            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.02] tracking-tight text-white md:text-[52px] lg:text-[60px]">
              Find verified compliance partners with confidence.
            </h1>

            <p className="mt-5 max-w-[650px] text-base font-medium leading-7 text-[#DDEBF9]">
              Globalink helps users discover verified consultants, labs and compliance partners. Globalink does not issue certificates or approvals.
            </p>

            <div className="mt-7 rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="grid gap-3 md:grid-cols-[150px_1fr_130px]">
                <select className="h-12 w-full rounded-[14px] border border-white/10 bg-white px-3 text-sm font-semibold text-[#04122A] outline-none">
                  <option>Consultant</option>
                  <option>Lab</option>
                  <option>Product</option>
                  <option>Certification</option>
                </select>

                <input
                  type="search"
                  placeholder="Search BIS, ISI, ISO, labs or consultants"
                  className="h-12 w-full rounded-[14px] border border-white/10 bg-white px-4 text-sm font-medium text-[#04122A] outline-none"
                />

                <Link href="/consultants" className="flex h-12 items-center justify-center rounded-[14px] bg-[#315EFB] px-5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(49,94,251,0.22)] hover:bg-[#2447D8]">
                  Search
                </Link>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/consultants" className="flex h-11 items-center rounded-[14px] bg-white px-5 text-sm font-semibold text-[#04122A] hover:bg-[#EAF4FF]">
                Explore Consultants
              </Link>
              <Link href="/labs" className="flex h-11 items-center rounded-[14px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10">
                Find Labs
              </Link>
              <Link href="/join" className="flex h-11 items-center rounded-[14px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10">
                Become a Partner
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-[390px] rounded-[24px] border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C9E3FB]">
                Verification-first platform
              </p>
              <h3 className="mt-3 text-2xl font-black">Built for controlled partner discovery</h3>
              <p className="mt-3 text-sm leading-6 text-[#DDEBF9]">
                Profiles can be reviewed for KYC, business details, credentials and service scope before discovery.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="flex h-11 items-center rounded-[14px] border border-white/10 bg-white/10 px-4 text-sm font-semibold">
                  ✓ Admin reviewed profiles
                </div>
                <div className="flex h-11 items-center rounded-[14px] border border-white/10 bg-white/10 px-4 text-sm font-semibold">
                  ✓ Inquiry based connections
                </div>
                <div className="flex h-11 items-center rounded-[14px] border border-white/10 bg-white/10 px-4 text-sm font-semibold">
                  ✓ Compliance partner discovery
                </div>
              </div>

              <button onClick={() => setOpen(true)} className="mt-5 text-sm font-semibold text-[#C9E3FB] hover:underline">
                View verification process →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
              Why Globalink
            </p>
            <h2 className="mt-2 text-[30px] font-black text-[#04122A] md:text-[38px]">
              A trusted discovery layer for compliance needs
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyGlobalink.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#E6EEF6] bg-white p-5 shadow-[0_6px_18px_rgba(10,20,40,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#315EFB]">
                  <Icon type={item.icon} />
                </div>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
            Popular Searches
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <Link
                key={item}
                href="/certifications"
                className="rounded-full border border-[#E6EEF6] bg-[#F8FAFC] px-4 py-2 text-sm font-semibold text-[#1B3554] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(10,20,40,0.06)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
                Marketplace Categories
              </p>
              <h2 className="mt-2 text-[30px] font-black text-[#04122A] md:text-[38px]">
                Start with verified partner categories
              </h2>
            </div>

            <Link href="/marketplace" className="rounded-[14px] border border-[#E6EEF6] bg-white px-5 py-3 text-sm font-semibold text-[#1B3554] hover:bg-[#F8FAFC]">
              View Marketplace
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {marketplaceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[22px] border border-[#E6EEF6] bg-white p-5 shadow-[0_6px_18px_rgba(10,20,40,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#315EFB]">
                  <Icon type={card.icon} />
                </div>

                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">{card.text}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#475569]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Link href={card.href} className="rounded-[12px] bg-[#10213F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#071B34]">
                    Find Partners
                  </Link>
                  <Link href="/contact" className="rounded-[12px] border border-[#E6EEF6] px-4 py-2.5 text-sm font-semibold text-[#1B3554] hover:bg-[#F8FAFC]">
                    Inquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
              Featured Profiles
            </p>
            <h2 className="mt-2 text-[30px] font-black text-[#04122A] md:text-[38px]">
              Preview trusted partner types
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProfiles.map((profile) => (
              <div
                key={profile.title}
                className="rounded-[22px] border border-[#E6EEF6] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#315EFB] shadow-sm">
                    <Icon type={profile.icon} />
                  </div>
                  <span className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-bold text-[#315EFB]">
                    {profile.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black">{profile.title}</h3>

                <div className="mt-4 grid gap-2">
                  {profile.meta.map((item) => (
                    <span key={item} className="rounded-[12px] bg-white px-3 py-2 text-sm font-semibold text-[#475569]">
                      {item}
                    </span>
                  ))}
                </div>

                <Link href="/marketplace" className="mt-5 inline-flex rounded-[12px] bg-[#10213F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#071B34]">
                  Explore Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
              How Verification Works
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight md:text-[38px]">
              Transparent review before marketplace visibility.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Globalink is designed for safe discovery. Profiles can be reviewed for business details, documents, credentials and service scope before users connect.
            </p>
          </div>

          <div className="grid gap-4">
            {verificationSteps.map(([num, title, text]) => (
              <div key={num} className="flex gap-4 rounded-[18px] border border-[#E6EEF6] bg-[#F8FAFC] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(10,20,40,0.06)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07223A] text-sm font-black text-white">
                  {num}
                </div>
                <div>
                  <h3 className="font-black text-[#04122A]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
              Built For
            </p>
            <h2 className="mt-2 text-[30px] font-black text-[#04122A] md:text-[38px]">
              Industries and compliance teams
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {users.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-[#E6EEF6] bg-[#F8FAFC] p-5 text-center font-black text-[#1B3554] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
            Compliance Categories
          </p>
          <h2 className="mt-3 text-[30px] font-black md:text-[38px]">
            Compliance categories supported through partner discovery
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map(([item, count]) => (
              <div key={item} className="relative rounded-[20px] border border-[#E6EEF6] border-t-4 border-t-[#315EFB]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-[#315EFB] hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#315EFB]">
                  <Icon type="doc" />
                </div>

                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Verified support network and inquiry-based partner discovery.
                </p>

                <div className="mt-4 rounded-lg bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-600">
                  {count}
                </div>

                <Link href="/certifications" className="mt-5 inline-flex rounded-[12px] bg-[#10213F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#071B34]">
                  Explore Experts
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
            Network Statistics
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {networkStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[22px] border border-[#E6EEF6] bg-[#F8FAFC] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <div className="text-3xl font-black text-[#10213F]">{value}</div>
                <div className="mt-2 text-sm font-semibold text-[#6B7280]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
            How industries use Globalink
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {successStories.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[#E6EEF6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#315EFB]">
                  <Icon type="globe" />
                </div>
                <h3 className="text-lg font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Discover consultants, labs and compliance support partners for category-specific requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07223A] px-4 py-12 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[24px] border border-white/10 bg-[#071B34] p-6 md:grid-cols-[1.25fr_0.75fr] md:items-center md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9DB8F8]">
              Procurement Safety
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Controlled discovery for compliance procurement.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#DDEBF9]">
              Globalink helps industries reduce dependency on unverified contacts by creating a structured place to discover reviewed consultants, labs and compliance partners.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              {[
                ["Profile review", "Business and service details"],
                ["KYC review", "Identity and contact verification"],
                ["Document checks", "Credential and scope signals"],
                ["Inquiry workflow", "Connect before engagement"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[16px] border border-white/10 bg-white/10 p-4">
                  <div className="font-semibold">{title}</div>
                  <div className="mt-1 text-xs text-slate-300">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <Link href="/join" className="rounded-[16px] bg-white px-7 py-4 text-center font-semibold text-[#071B34] shadow-[0_10px_24px_rgba(255,255,255,0.12)] hover:bg-[#EAF4FF]">
            Join as verified partner
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[26px] border border-[#E6EEF6] bg-[#F8FAFC] p-6 text-center shadow-[0_10px_30px_rgba(10,20,40,0.06)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#315EFB]">
            Join Globalink
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#04122A] md:text-4xl">
            Ready to join the compliance network?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6B7280]">
            Create a partner profile and become part of a structured discovery platform for compliance consultants, labs and sellers.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/join?role=consultant" className="rounded-[14px] bg-[#10213F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#071B34]">
              Join as Consultant
            </Link>
            <Link href="/join?role=lab" className="rounded-[14px] border border-[#D8E3F0] bg-white px-6 py-3 text-sm font-semibold text-[#1B3554] hover:bg-[#F4F7FB]">
              Join as Lab
            </Link>
            <Link href="/join?role=seller" className="rounded-[14px] border border-[#D8E3F0] bg-white px-6 py-3 text-sm font-semibold text-[#1B3554] hover:bg-[#F4F7FB]">
              Join as Seller
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-10 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[22px] border border-[#F3D1D1] bg-[#FFF7F7] p-6">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#B42318]">
            Important Notice
          </p>
          <h2 className="mt-3 text-2xl font-black text-[#7A271A]">
            Globalink does not issue certificates, approvals, licenses or registrations.
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#7A271A]">
            Globalink helps users discover consultants, laboratories and compliance partners through a verified discovery and inquiry-based marketplace.
          </p>
        </div>
      </section>

      <footer className="bg-white px-4 pb-8 pt-2 text-center md:px-8">
        <div className="mx-auto max-w-7xl border-t border-[#E6EEF6] pt-8">
          <p className="font-bold text-[#1B3554]">Globalink Compliance Network</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[#1B3554]">
            {[
              "Verified Discovery",
              "Compliance Marketplace",
              "Admin Reviewed Profiles",
              "Inquiry Based Connections",
            ].map((item) => (
              <span key={item} className="rounded-full border border-[#E6EEF6] bg-[#F8FAFC] px-4 py-2">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-[20px] bg-white p-6 shadow-xl">
            <h2 className="text-xl font-black text-[#04122A]">
              How verification works
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">
              Globalink can review consultants, labs and sellers through KYC, business information, document checks, credential review and admin approval before marketplace visibility.
            </p>

            <ul className="mt-4 space-y-2 text-sm font-semibold text-[#334155]">
              <li>✓ Business and identity review</li>
              <li>✓ Credential and document checks</li>
              <li>✓ Service scope verification</li>
              <li>✓ Admin approved partner profile</li>
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