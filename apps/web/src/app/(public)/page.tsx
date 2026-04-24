import Link from "next/link";

const stats = [
  { label: "Verified Profiles", value: "5,294+" },
  { label: "Open RFQs", value: "186+" },
  { label: "Marketplace Listings", value: "8,500+" },
  { label: "Compliance Cases", value: "2,100+" },
];

const modules = [
  {
    title: "Consultants",
    desc: "Find BIS, ISO, FDA, FSSAI and export compliance experts.",
    href: "/consultants",
  },
  {
    title: "Labs",
    desc: "Connect with trusted labs for testing and certification support.",
    href: "/labs",
  },
  {
    title: "Marketplace",
    desc: "Discover certified products, equipment and verified sellers.",
    href: "/marketplace",
  },
  {
    title: "Compliance",
    desc: "Track approvals, documents, certificates and verification flows.",
    href: "/compliance",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBE4D8] px-8 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[24px] border border-[#dfb6b2] bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#190019]">Globalink</h2>
              <p className="text-sm text-[#854F6C]">
                Government-grade consultant, lab & marketplace platform
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#190019]">
              <Link href="/consultants">Consultants</Link>
              <Link href="/labs">Labs</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/compliance">Compliance</Link>
              <Link
                href="/login"
                className="rounded-xl border border-[#dfb6b2] px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/join"
                className="rounded-xl px-4 py-2 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                }}
              >
                Join Globalink
              </Link>
            </nav>
          </div>
        </header>

        <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
          <div
            className="rounded-[24px] px-8 py-12 text-white"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
              Globalink Platform
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight">
              All-in-One Global Consultant, Lab & Marketplace Platform
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#FBE4D8]">
              Companies can find verified consultants, trusted labs, certified
              products and compliance support in one clean professional ecosystem.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/consultants"
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#190019]"
              >
                Find Consultants
              </Link>

              <Link
                href="/join"
                className="rounded-xl border border-white/60 px-5 py-3 text-sm font-bold text-white"
              >
                Get Started
              </Link>

              <Link
                href="/dashboard"
                className="rounded-xl border border-white/60 px-5 py-3 text-sm font-bold text-white"
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-[#854F6C]">{item.label}</p>
              <h2 className="mt-3 text-3xl font-bold text-[#190019]">
                {item.value}
              </h2>
            </div>
          ))}
        </section>

        <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-bold text-[#190019]">
            Explore Globalink Modules
          </h2>
          <p className="mt-2 text-sm text-[#854F6C]">
            Built for companies, consultants, labs, sellers and buyers.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[22px] border border-[#dfb6b2] bg-[#fff8f7] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#190019]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#522B5B]">
                  {item.desc}
                </p>
                <div className="mt-5 inline-flex rounded-xl bg-[#2B124C] px-4 py-2 text-sm font-bold text-white">
                  Explore
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-bold text-[#190019]">
              Why companies need Globalink?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#522B5B]">
              Companies struggle to find reliable BIS, ISO, FSSAI, FDA,
              testing labs and certification consultants. Globalink brings all
              verified experts, labs and marketplace sellers together so users
              can compare, contact and choose easily.
            </p>
          </div>

          <div
            className="rounded-[28px] p-7 text-white shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            <h3 className="text-2xl font-bold">Build trust before business</h3>
            <p className="mt-3 text-sm leading-6 text-[#FBE4D8]">
              Consultants, labs and sellers can register, verify documents and
              build a trusted business presence.
            </p>

            <Link
              href="/join"
              className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#190019]"
            >
              Join Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}