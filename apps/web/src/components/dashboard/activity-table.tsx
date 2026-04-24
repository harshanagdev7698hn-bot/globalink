const rows = [
  { id: "RFQ-1001", type: "RFQ", owner: "Ministry Procurement", status: "Open" },
  { id: "CMP-204", type: "Compliance", owner: "ABC Equipments", status: "Pending" },
  { id: "ORD-450", type: "Order", owner: "Buyer Group A", status: "In Progress" },
  { id: "KYC-090", type: "KYC", owner: "Global Lab Services", status: "Approved" },
];

export function ActivityTable() {
  return (
    <div className="glass-panel overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4">
        <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
        <p className="text-sm text-slate-500">Latest operational workflows across the platform</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-5 py-3 font-medium">ID</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Owner</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-100 text-sm">
                <td className="px-5 py-4 font-medium text-slate-900">{row.id}</td>
                <td className="px-5 py-4 text-slate-600">{row.type}</td>
                <td className="px-5 py-4 text-slate-600">{row.owner}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}