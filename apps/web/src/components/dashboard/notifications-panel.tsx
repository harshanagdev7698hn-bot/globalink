const items = [
  "3 new consultant applications awaiting review",
  "2 RFQs require admin assignment",
  "1 compliance certificate expires in 7 days",
  "5 orders moved to dispatch stage",
];

export function NotificationsPanel() {
  return (
    <div className="glass-panel p-5">
      <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
      <p className="mt-1 text-sm text-slate-500">Priority alerts and platform notices</p>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}