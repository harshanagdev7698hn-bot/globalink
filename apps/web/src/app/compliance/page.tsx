import MainLayout from "@/components/MainLayout";

const stats = [
  { title: "Total Certifications", value: "—", note: "Live tracking" },
  { title: "Pending Approvals", value: "—", note: "In verification" },
  { title: "Expired Certificates", value: "—", note: "Alert system" },
  { title: "Compliance Score", value: "Active", note: "Platform status" },
];

export default function CompliancePage() {
  return (
    <MainLayout>
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Compliance Portal
          </p>
          <h1 className="mt-3 text-4xl font-bold">Compliance Overview</h1>
          <p className="mt-3 text-sm text-[#FBE4D8]">
            Track BIS, ISO and verification workflows in one professional portal.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-[#854F6C]">{item.title}</p>
            <h2 className="mt-3 text-3xl font-bold text-[#190019]">
              {item.value}
            </h2>
            <p className="mt-2 text-xs text-[#6B7280]">{(item as any).note}</p>
          </div>
        ))}
      </section>
    </MainLayout>
  );
}