import Link from "next/link";

const stats = [
  { value: "500+", label: "Verified Experts" },
  { value: "100+", label: "Trusted Labs" },
  { value: "25+", label: "Compliance Categories" },
  { value: "2,000+", label: "Business Users" },
];

const services = [
  "BIS Certification",
  "CDSCO Registration",
  "WPC Approval",
  "TEC / MTCTE",
  "EPR Registration",
  "Legal Metrology",
  "Pollution Control",
  "ISO Certification",
  "Factory License",
  "Import Export Compliance",
  "MOOWR Scheme",
  "Lab Testing",
];

const features = [
  {
    title: "Verified Consultants",
    desc: "Find trusted experts for BIS, CDSCO, ISO, EPR, WPC and industrial approvals.",
  },
  {
    title: "Trusted Labs",
    desc: "Connect with verified testing, calibration and compliance labs.",
  },
  {
    title: "Compliance Marketplace",
    desc: "Explore certified products, lab equipment and compliance services.",
  },
  {
    title: "AI Compliance Assistant",
    desc: "Get guidance, document checks and consultant recommendations faster.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-3xl font-black tracking-tight text-[#000F22]">
            Globalink
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#1F2937] md:flex">
            <Link href="/consultants">Consultants</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-extrabold text-[#1B3554]"
            >
              Login
            </Link>

            <Link
              href="/join"
              className="rounded-xl bg-[#1B3554] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#000F22]"
            >
              Join
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-14">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#C0E6FD]">
                AI-powered compliance marketplace
              </p>

              <h1 className="mt-7 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Find verified consultants, labs and compliance experts in one
                trusted platform
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA] md:text-lg">
                Globalink helps manufacturers, exporters and industry owners
                connect with trusted experts for BIS, CDSCO, WPC, EPR, ISO,
                testing and industrial approvals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/consultants"
                  className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22]"
                >
                  Find Verified Experts
                </Link>

                <Link
                  href="/join"
                  className="rounded-2xl border border-white/25 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
                >
                  Register Your Business
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrustBadge text="GST Verified Experts" />
                <TrustBadge text="NABL Lab Network" />
                <TrustBadge text="Admin Reviewed Profiles" />
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C0E6FD]">
                Compliance Assistant
              </p>

              <div className="mt-6 rounded-3xl bg-white p-5 text-[#1F2937]">
                <p className="text-sm font-bold text-[#1B3554]">
                  User question
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  “Muje toy manufacturing start karna hai India me”
                </p>
              </div>

              <div className="mt-4 rounded-3xl bg-[#EEF7FF] p-5 text-[#1F2937]">
                <p className="text-sm font-bold text-[#1B3554]">
                  Globalink AI response
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6B7280]">
                  <li>• Applicable BIS standards</li>
                  <li>• Lab testing requirement</li>
                  <li>• Document checklist</li>
                  <li>• Estimated timeline</li>
                  <li>• Verified consultant suggestions</li>
                </ul>
              </div>

              <Link
                href="/join"
                className="mt-5 inline-flex w-full justify-center rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-black text-white"
              >
                Try AI Guidance
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-black text-[#000F22]">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-bold text-[#6B7280]">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="mt-8 rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
            Why Globalink
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#000F22]">
            Built for companies who need clarity, trust and verified compliance
            support
          </h2>

          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#D6E2F0] bg-[#F8FAFC] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3554] text-lg font-black text-white">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-black text-[#000F22]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-8 rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
                Services covered
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black text-[#000F22]">
                Compliance services available through verified experts
              </h2>
            </div>

            <Link
              href="/consultants"
              className="rounded-2xl bg-[#1B3554] px-6 py-4 text-center text-sm font-black text-white hover:bg-[#000F22]"
            >
              Explore Consultants
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-5 text-sm font-black text-[#1B3554]"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-[34px] bg-[#1B3554] p-8 text-white shadow-xl md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Start with trust
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black">
                Join Globalink as a consultant, lab, seller or buyer
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#DCEBFA]">
                Build a verified compliance network where businesses can find
                genuine experts and avoid fraud.
              </p>
            </div>

            <Link
              href="/join"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#000F22]"
            >
              Create Account
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-8 border-t border-[#D6E2F0] py-8 text-sm text-[#6B7280]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="font-bold text-[#000F22]">Globalink</p>
            <p>Trusted compliance, consultant, lab and marketplace platform.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}