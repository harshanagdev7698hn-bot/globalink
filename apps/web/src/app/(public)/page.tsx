import Link from "next/link";

const stats = [
  { label: "Verified Profiles", value: "5,294+" },
  { label: "Open RFQs", value: "186+" },
  { label: "Marketplace Listings", value: "8,500+" },
  { label: "Compliance Cases", value: "2,100+" },
];

const modules = [
  {
    title: "Verified Consultants",
    desc: "Find trusted BIS, ISO, CDSCO, EPR, WPC and compliance consultants.",
  },
  {
    title: "Approved Labs",
    desc: "Connect with verified testing and calibration labs for your products.",
  },
  {
    title: "Compliance Marketplace",
    desc: "Discover certified products, services and industrial compliance support.",
  },
  {
    title: "AI Compliance Assistant",
    desc: "Get smart guidance, document checks and consultant recommendations.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-6">
        <header className="rounded-[26px] border border-[#D6E2F0] bg-white px-6 py-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-[#000F22]">
                Globalink
              </h1>
              <p className="mt-1 text-sm text-[#6B7280]">
                Government-grade consultant, lab & compliance marketplace.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#1F2937]">
              <Link href="/consultants">Consultants</Link>
              <Link href="/labs">Labs</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/compliance">Compliance</Link>
              <Link
                href="/login"
                className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-[#1B3554]"
              >
                Login
              </Link>
              <Link
                href="/join"
                className="rounded-xl bg-[#1B3554] px-4 py-2 text-white"
              >
                Join Globalink
              </Link>
            </nav>
          </div>
        </header>

        <section className="mt-8 rounded-[30px] border border-[#D6E2F0] bg-white p-3 shadow-sm">
          <div className="rounded-[24px] bg-[#000F22] px-8 py-14 text-white md:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C0E6FD]">
              Globalink Platform
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              India’s trusted compliance, consultant, lab & marketplace platform
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#EAF2FB]">
              Companies can find verified consultants, trusted labs, certified
              products and compliance support in one clean professional
              ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/consultants"
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#000F22]"
              >
                Find Consultants
              </Link>
              <Link
                href="/join"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white"
              >
                Get Started
              </Link>
              <Link
                href="/dashboard"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white"
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-[#6B7280]">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-extrabold text-[#000F22]">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
            Explore Globalink
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-[#000F22]">
            Built for manufacturers, exporters, consultants, labs and buyers
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#D6E2F0] bg-[#F8FAFC] p-6"
              >
                <h4 className="text-xl font-extrabold text-[#1B3554]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}