import Link from "next/link";

function Icon({ type }: { type: "shield" | "lab" | "doc" | "globe" | "users" | "market" }) {
  const common = "h-6 w-6";
  if (type === "shield") return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 2.9 8.6 7 10 4.1-1.4 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (type === "lab") return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3M8 15h8" /></svg>;
  if (type === "doc") return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6V3Z" /><path d="M14 3v4h4M9 13h6M9 17h4" /></svg>;
  if (type === "users") return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (type === "market") return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9h18l-2 12H5L3 9Z" /><path d="M7 9a5 5 0 0 1 10 0" /></svg>;
  return <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9M12 3c-2.3 2.4-3.5 5.4-3.5 9s1.2 6.6 3.5 9" /></svg>;
}

const stats = [
  ["Verified Experts", "500+"],
  ["Lab Partners", "120+"],
  ["Certification Areas", "40+"],
  ["Countries Network", "25+"],
];

const cards = [
  ["Verified Consultants", "Find trusted compliance professionals for BIS, ISO, CE, FDA and industry certification support.", "users"],
  ["Accredited Labs", "Connect with testing, calibration and inspection labs for product compliance requirements.", "lab"],
  ["Certification Support", "Get guided support for documentation, testing, audit preparation and certification workflow.", "doc"],
  ["Trusted Marketplace", "Discover compliance-related products, services and verified industry partners.", "market"],
] as const;

const certs = ["BIS", "ISI Mark", "ISO", "CE", "FDA", "FSSAI", "NABL", "RoHS"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0B2E5E] text-white">
              <Icon type="globe" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">
                GLOBA<span className="text-blue-700">LINK</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Compliance Network
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
            <Link href="/consultants">Consultants</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
  href="/login"
  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold"
>
              Sign In
            </Link>
            <Link
  href="/join"
  className="rounded-md bg-[#1B3554] px-5 py-3 text-sm font-bold text-white shadow-lg"
>
              Join Globalink
            </Link>
          </div>
        </div>
      </header>

      <section
        className="relative bg-slate-950"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(3,12,32,.97) 0%, rgba(3,12,32,.88) 40%, rgba(3,12,32,.45) 100%), url('/images/globalink-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="mx-auto grid min-h-[710px] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-md border border-blue-300/20 bg-white/5 px-4 py-2 text-sm font-bold text-blue-100">
              Verified compliance marketplace for industries
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Build trusted compliance connections worldwide.
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-200">
              Globalink connects industries with verified consultants, accredited labs, certification support and trusted marketplace partners.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/consultants" className="rounded-md bg-[#1B3554] px-8 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-blue-700/25">
                Explore Consultants
              </Link>
              <Link href="/labs" className="rounded-md bg-white px-8 py-4 text-center text-base font-extrabold text-slate-950">
                Find Labs
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 px-6 relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-4">
          {cards.map(([title, text, icon]) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <Icon type={icon} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">
                How Globalink Works
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                Simple, verified and transparent compliance discovery.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Industries can find trusted consultants, connect with labs, understand certification needs and reduce fraud risk through a professional compliance-first platform.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                ["01", "Search verified experts, labs or certification categories"],
                ["02", "Compare profiles, services, ratings and expertise"],
                ["03", "Connect safely and manage compliance requirements"],
              ].map(([num, text]) => (
                <div key={num} className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#0B2E5E] text-sm font-black text-white">
                    {num}
                  </div>
                  <div className="text-lg font-extrabold leading-7 text-slate-900">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">
              Certification Categories
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              One trusted platform for compliance support
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Discover verified consultants, labs and support partners for major certification and compliance areas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {certs.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-blue-700 ring-1 ring-blue-100">
                  <Icon type="doc" />
                </div>
                <h3 className="text-2xl font-black text-slate-950">{item}</h3>
                <p className="mt-2 text-sm text-slate-500">Verified support network</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071A33] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Fraud protection starts with verified discovery.</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Globalink is designed to help industries avoid confusion, unverified agents and unreliable service providers.
            </p>
          </div>
          <Link href="/join" className="rounded-md bg-white px-8 py-4 text-center font-extrabold text-slate-950">
            Join Globalink
          </Link>
        </div>
      </section>
    </main>
  );
}