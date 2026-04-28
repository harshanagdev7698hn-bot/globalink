import RoleGuard from "@/components/RoleGuard";

export default function LabDashboardPage() {
  return (
    <RoleGuard
      allowed={["LAB", "ADMIN"]}
      message="Only labs can manage lab profile and testing services."
    >
      <div className="rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">Lab Dashboard</h1>
        <p className="mt-2 text-[#854F6C]">
          Manage lab profile, testing services and reports.
        </p>
      </div>
    </RoleGuard>
  );
}