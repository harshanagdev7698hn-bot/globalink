import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const categories = [
  {
    title: "BIS Certification",
    description:
      "Support for Bureau of Indian Standards compliance, product certification and factory approvals.",
  },
  {
    title: "ISI Mark",
    description:
      "Guidance for industrial safety and quality mark approvals for consumer and electrical goods.",
  },
  {
    title: "ISO Certification",
    description:
      "Assistance with ISO management systems, quality, environment, safety and information security standards.",
  },
  {
    title: "CE Marking",
    description:
      "Support for CE conformity assessment and European regulatory approval for electronics and machinery.",
  },
  {
    title: "FDA",
    description:
      "Regulatory support for U.S. Food and Drug Administration approvals and product compliance.",
  },
  {
    title: "FSSAI",
    description:
      "Food safety registration and licensing support for packaged, restaurant and manufacturing businesses.",
  },
  {
    title: "CDSCO",
    description:
      "Guidance for Central Drugs Standard Control Organization approvals, medical devices and pharmaceuticals.",
  },
  {
    title: "WPC Approval",
    description:
      "Assistance with Wireless Planning & Coordination approvals for telecom, RF and wireless equipment.",
  },
  {
    title: "TEC / MTCTE",
    description:
      "Support for TEC and MTCTE certification for telecom, electronics and network equipment.",
  },
  {
    title: "EPR Registration",
    description:
      "Help with Extended Producer Responsibility registration, compliance and reporting for packaging waste.",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-5">
        <section className="overflow-hidden rounded-[32px] bg-[#061028] px-5 py-5 text-white shadow-2xl sm:px-6 sm:py-6 md:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#84C0F4]">
              Certification Support
            </p>

            <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-4xl">
              Certification support for regulated businesses
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#C9D8F6]">
              Explore BIS, ISI, ISO, CE, FDA, FSSAI, CDSCO, WPC, TEC/MTCTE and EPR
              compliance support categories before connecting with verified experts.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/consultants"
                className="inline-flex w-full justify-center rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#07162D] transition hover:bg-slate-100 sm:w-auto"
              >
                Browse consultants
              </Link>

              <p className="max-w-xl text-sm leading-6 text-[#A8BEDC]">
                Review category guidance and select the right service area for your regulated business need.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href="/consultants"
                className="group rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#B4C6E7] hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#5B86B6]">
                      Compliance category
                    </p>
                    <h2 className="mt-3 text-2xl font-black text-[#07162D]">
                      {category.title}
                    </h2>
                  </div>

                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4FF] text-sm font-black text-[#1B3554]">
                    →
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#475569]">
                  {category.description}
                </p>

                <p className="mt-6 text-sm font-black text-[#1B3554] transition group-hover:text-[#0A1A2E]">
                  Learn more about this category
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}