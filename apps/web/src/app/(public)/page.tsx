import Link from "next/link";

const services = [
  "BIS Certification",
  "CDSCO Registration",
  "WPC Approval",
  "TEC / MTCTE",
  "EPR Registration",
  "Legal Metrology",
  "Pollution Control",
  "ISO Certification",
];

const stats = [
  { label: "Verified Experts", value: "500+" },
  { label: "Compliance Categories", value: "25+" },
  { label: "Trusted Labs", value: "100+" },
  { label: "Business Users", value: "2,000+" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <header className="border-b border-[#D6E2F0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-3xl font-extrabold text-[#000F22]">
            Globalink
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-[#1F2937] md:flex">
            <Link href="/consultants">Consultants</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-bold text-[#1B3554]"
            >
              Login
            </Link>
            <Link
              href="/join"
              className="rounded-xl bg-[#1B3554] px-4 py-2 text-sm font-bold text-white"
            >
              Join
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[34px] bg-[#000F22] px-8 py-16 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            AI-powered compliance marketplace
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            Find trusted consultants, labs and compliance experts for your
            business
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Globalink helps manufacturers, exporters and industry owners connect
            with verified experts for BIS, CDSCO, WPC, EPR, ISO, lab testing
            and industrial approvals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-[#000F22]"
            >
              Create Trusted Account
            </Link>

            <Link
              href="/consultants"
              className="rounded-2xl border border-white/25 px-6 py-4 text-sm font-extrabold text-white"
            >
              Explore Consultants
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-[#6B7280]">{item.label}</p>
              <p className="mt-3 text-3xl font-extrabold text-[#000F22]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-[30px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
            Services covered
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#000F22]">
            Compliance services through verified experts
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-5 text-sm font-extrabold text-[#1B3554]"
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}