import Link from "next/link";

const modules = [
  {
    title: "Admin Overview",
    tag: "Governance",
    desc: "Monitor users, approvals, KYC verification and platform operations.",
    href: "/dashboard/admin",
  },
  {
    title: "Consultants",
    tag: "Experts",
    desc: "Manage verified consultants, services, GST/MSME and visibility.",
    href: "/dashboard/consultants",
  },
  {
    title: "Buyer Workspace",
    tag: "RFQ",
    desc: "Raise requests, review proposals and track compliance decisions.",
    href: "/dashboard/buyer",
  },
  {
    title: "Labs",
    tag: "Testing",
    desc: "Manage labs, NABL approvals, testing categories and documents.",
    href: "/dashboard/labs",
  },
];

export default function DashboardPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
            Globalink Dashboard
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#000F22]">
            Government-grade compliance command center
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
            Manage verified consultants, labs, buyers, marketplace listings,
            approvals and compliance workflows from one trusted enterprise
            dashboard.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-[#D6E2F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="rounded-full bg-[#EEF7FF] px-3 py-1 text-xs font-bold text-[#1B3554]">
                {item.tag}
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#000F22]">
                {item.title}
              </h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#6B7280]">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-flex rounded-xl bg-[#1B3554] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#000F22]"
              >
                Open Module
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}