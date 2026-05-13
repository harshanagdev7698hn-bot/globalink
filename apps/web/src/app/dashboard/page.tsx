import Link from "next/link";

const modules = [
  {
    title: "Admin Overview",
    tag: "Governance",
    desc: "Monitor users, approvals, verification and platform operations.",
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
    <section className="px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
            Globalink Dashboard
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#10243E]">
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
              className="rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {item.tag}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-[#10243E]">
                {item.title}
              </h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#6B7280]">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-flex rounded-xl bg-[#10243E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173252]"
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