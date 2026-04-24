import Link from "next/link";

const modules = [
  {
    title: "Admin Overview",
    desc: "Monitor users, approvals, revenue and platform operations.",
    href: "/dashboard/admin",
    tag: "Governance",
  },
  {
    title: "Consultants",
    desc: "Manage expert profiles, GST/MSME verification and visibility.",
    href: "/dashboard/consultants",
    tag: "Experts",
  },
  {
    title: "Buyer Workspace",
    desc: "Raise RFQs, review proposals and track procurement decisions.",
    href: "/dashboard/buyer",
    tag: "RFQ",
  },
  {
    title: "Labs",
    desc: "Handle lab requests, certification support and compliance workflows.",
    href: "/dashboard/labs",
    tag: "Testing",
  },
  {
    title: "Marketplace",
    desc: "Manage products, enquiries, sellers and buyer discovery.",
    href: "/dashboard/marketplace",
    tag: "Trade",
  },
  {
    title: "Requests",
    desc: "Track RFQs, orders and operational actions in one workflow.",
    href: "/dashboard/requests",
    tag: "Workflow",
  },
  {
    title: "Certifications",
    desc: "Manage BIS, ISO, FDA, FSSAI and global certification records.",
    href: "/dashboard/certifications",
    tag: "Compliance",
  },
  {
    title: "Settings",
    desc: "Update profile, account preferences and platform configuration.",
    href: "/dashboard/settings",
    tag: "Account",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Globalink Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            Government-grade dashboard
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#FBE4D8]">
            Access all major modules from one premium operations layer built for
            buyers, consultants, labs, sellers and administrators.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-[#FBE4D8] px-3 py-1 text-xs font-bold text-[#854F6C]">
                  {item.tag}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-[#190019]">
                  {item.title}
                </h2>
              </div>

              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                }}
              >
                →
              </div>
            </div>

            <p className="mt-4 min-h-[52px] text-sm leading-6 text-[#522B5B]">
              {item.desc}
            </p>

            <div className="mt-6 inline-flex rounded-xl border border-[#dfb6b2] bg-[#fff8f7] px-4 py-2 text-sm font-bold text-[#190019]">
              Open Module
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}