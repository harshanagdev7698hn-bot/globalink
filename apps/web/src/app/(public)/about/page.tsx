import PublicNavbar from "@/components/PublicNavbar";
import Link from "next/link";

const values = [
  {
    title: "Trust First",
    desc: "Globalink focuses on verified consultants, labs and businesses to reduce fraud.",
  },
  {
    title: "Compliance Simplified",
    desc: "Helping industries understand certifications, approvals and regulatory workflows.",
  },
  {
    title: "Enterprise Experience",
    desc: "Built with clean government-grade UI for industries and professional users.",
  },
  {
    title: "Global Marketplace",
    desc: "Connecting manufacturers, exporters, labs and consultants in one ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="rounded-[36px] bg-[#000F22] px-8 py-14 text-white shadow-2xl md:px-14">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C0E6FD]">
            About Globalink
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Building a trusted compliance and consultant ecosystem
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#DCEBFA]">
            Globalink is designed to help businesses find verified compliance
            consultants, trusted labs and certified marketplace solutions in one
            professional platform.
          </p>
        </section>

        {/* STORY */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#000F22]">
              Simplifying compliance for industries
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-[#6B7280]">
              <p>
                Many manufacturers and businesses struggle to find genuine
                consultants, testing labs and compliance support.
              </p>

              <p>
                Globalink aims to create a transparent and trusted ecosystem
                where companies can discover verified experts for BIS, CDSCO,
                ISO, EPR, WPC, testing and industrial approvals.
              </p>

              <p>
                The platform is designed with a clean enterprise experience so
                industries feel safe, professional and confident while using it.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#1B3554] p-8 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
              Platform Vision
            </p>

            <h2 className="mt-4 text-3xl font-black">
              A government-grade compliance marketplace
            </h2>

            <ul className="mt-8 space-y-4 text-sm leading-7 text-[#DCEBFA]">
              <li>• Verified consultant profiles</li>
              <li>• Trusted testing labs</li>
              <li>• Compliance marketplace</li>
              <li>• AI compliance guidance</li>
              <li>• Fraud reduction through KYC</li>
              <li>• Enterprise-grade dashboard</li>
            </ul>
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-8 rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
            Core Values
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#000F22]">
            What makes Globalink different
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => (
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

        {/* CTA */}
        <section className="mt-8 rounded-[34px] bg-[#000F22] p-10 text-white shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Join Globalink
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black">
                Become part of a trusted compliance ecosystem
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#DCEBFA]">
                Register as a consultant, lab, seller or buyer and grow your
                business with trust.
              </p>
            </div>

            <Link
              href="/join"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#000F22]"
            >
              Create Trusted Account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}