import RoleGuard from "@/components/RoleGuard";

export default function ConsultantDashboardPage() {
  return (
    <RoleGuard
      allowed={["CONSULTANT", "ADMIN"]}
      message="Only consultants can create or edit consultant profile."
    >
      <div className="rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">
          Consultant Dashboard
        </h1>
        <p className="mt-2 text-[#854F6C]">
          Create and manage your consultant profile here.
        </p>
      </div>
    </RoleGuard>
  );
}