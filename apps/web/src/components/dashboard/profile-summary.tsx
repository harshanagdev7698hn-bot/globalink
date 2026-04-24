type ProfileSummaryProps = {
  title: string;
  role: string;
  status: string;
};

export function ProfileSummary({
  title,
  role,
  status,
}: ProfileSummaryProps) {
  return (
    <div className="glass-panel p-5">
      <h3 className="text-lg font-semibold text-slate-900">Profile summary</h3>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Name</span>
          <span className="font-medium text-slate-900">{title}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Role</span>
          <span className="font-medium text-slate-900">{role}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Verification</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}