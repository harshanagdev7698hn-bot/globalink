const stats = [
  {
    title: "Open RFQs",
    value: "186",
    desc: "Active procurement requests",
  },
  {
    title: "Under Review",
    value: "42",
    desc: "Proposals pending evaluation",
  },
  {
    title: "Approved Requests",
    value: "91",
    desc: "Approved procurement workflows",
  },
  {
    title: "Closed Requests",
    value: "310",
    desc: "Successfully completed RFQs",
  },
];

const recent = [
  {
    id: "RFQ-1001",
    type: "RFQ",
    owner: "Ministry Procurement",
    status: "Open",
  },
  {
    id: "CMP-204",
    type: "Compliance",
    owner: "ABC Equipments",
    status: "Pending",
  },
  {
    id: "ORD-450",
    type: "Order",
    owner: "Buyer Group A",
    status: "In Progress",
  },
  {
    id: "KYC-090",
    type: "KYC",
    owner: "Global Lab Services",
    status: "Approved",
  },
];

const notifications = [
  "3 new consultant applications awaiting review",
  "2 RFQs require admin assignment",
  "1 compliance certificate expires in 7 days",
  "5 orders moved to dispatch stage",
];

export default function RequestsPage() {
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
            Requests Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            RFQ & Proposal Tracking
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#FBE4D8]">
            Track open requests, proposal status, procurement responses and
            approval workflows in one professional dashboard.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-[#854F6C]">{item.title}</p>
            <h2 className="mt-3 text-3xl font-bold text-[#190019]">
              {item.value}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#522B5B]">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-[28px] border border-[#dfb6b2] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#190019]">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-[#854F6C]">
            Latest operational workflows across the platform
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#dfb6b2]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#fff8f7] text-[#854F6C]">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Owner</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((item) => (
                  <tr key={item.id} className="border-t border-[#f1d3c8]">
                    <td className="p-4 font-semibold text-[#190019]">
                      {item.id}
                    </td>
                    <td className="p-4 text-[#522B5B]">{item.type}</td>
                    <td className="p-4 text-[#522B5B]">{item.owner}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-[#FBE4D8] px-3 py-1 text-xs font-bold text-[#190019]">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#dfb6b2] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#190019]">Notifications</h2>
          <p className="mt-1 text-sm text-[#854F6C]">
            Priority alerts and platform notices
          </p>

          <div className="mt-6 space-y-3">
            {notifications.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-4 text-sm font-medium text-[#522B5B]"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}