import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const guides = [
  {
    title: "BIS Certification Guide",
    desc: "Understand ISI mark, documents, testing, factory audit and certification process.",
    tags: ["ISI Mark", "Testing", "Factory Audit"],
  },
  {
    title: "CDSCO Registration Guide",
    desc: "Guidance for medical devices, cosmetics, import registration and regulatory support.",
    tags: ["Medical Devices", "Cosmetics", "Import"],
  },
  {
    title: "EPR Registration Guide",
    desc: "Learn about EPR compliance for e-waste, plastic waste, battery waste and packaging.",
    tags: ["E-Waste", "Plastic", "Battery"],
  },
  {
    title: "WPC Approval Guide",
    desc: "Approval guidance for wireless, WiFi, Bluetooth and RF-enabled products.",
    tags: ["WiFi", "Bluetooth", "RF Devices"],
  },
  {
    title: "TEC / MTCTE Guide",
    desc: "Telecom equipment approval, testing requirements and compliance process overview.",
    tags: ["Telecom", "Testing", "MTCTE"],
  },
  {
    title: "ISO Certification Guide",
    desc: "Overview of ISO 9001, ISO 14001, ISO 27001 and business management certifications.",
    tags: ["ISO 9001", "ISO 14001", "ISO 27001"],
  },
];

const faqs = [
  "What is BIS certification?",
  "What documents are required for ISI mark?",
  "How long does certification usually take?",
  "How do I find a verified consultant or lab?",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-[#1F2937]">
      <PublicNavbar />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-3xl bg-[#000F22] px-6 py-6 text-white shadow-lg md:px-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
            Globalink Resources
          </p>

          <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
            Compliance guides, standards and business resources.
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-8 text-[#DCEBFA] md:text-base">
            Explore practical guides for BIS, CDSCO, EPR, WPC, TEC/MTCTE,
            ISO and other compliance areas. Built to help businesses understand
            the process before connecting with verified experts.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["Industry Reviewed", "Consultant Verified", "Easy to Understand"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white"
                >
                  ✓ {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-[#D6E2F0] bg-white p-4 shadow-sm md:p-5">
          <input
            type="text"
            placeholder="Search BIS, ISO, CDSCO, EPR, WPC resources..."
            className="h-14 w-full rounded-2xl border border-[#D6E2F0] px-5 text-sm font-semibold outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
          />
        </div>

        <section className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#5B86B6]">
                Popular Guides
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#000F22]">
                Start with essential compliance guides
              </h2>
            </div>

            <Link
              href="/consultants"
              className="rounded-2xl bg-[#1B3554] px-6 py-3 text-sm font-black text-white"
            >
              Find Experts
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-[28px] border border-[#D6E2F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-xl font-black text-[#1B3554]">
                  📘
                </div>

                <h3 className="mt-6 text-xl font-black text-[#000F22]">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {guide.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F1F5F9] px-3 py-2 text-xs font-black text-[#334155]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/consultants"
                  className="mt-6 inline-flex text-sm font-black text-[#1B3554]"
                >
                  Connect with expert →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[32px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#5B86B6]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#000F22]">
              Common compliance questions
            </h2>

            <div className="mt-6 grid gap-3">
              {faqs.map((faq) => (
                <div
                  key={faq}
                  className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#1F2937]"
                >
                  {faq}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[#000F22] p-8 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
              Why Globalink Resources?
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Learn first, connect better.
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                "Compliance-focused content",
                "Built for business users",
                "Supports consultant discovery",
                "Simple, practical and structured",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-black"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <PublicFooter />
    </main>
  );
}
