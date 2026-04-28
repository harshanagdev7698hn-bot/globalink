import RoleGuard from "@/components/RoleGuard";

export default function BuyerDashboardPage() {
  return (
    <RoleGuard
      allowed={["BUYER", "ADMIN"]}
      message="Only buyers can raise RFQs and purchase requests."
    >
      <div className="rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">Buyer Workspace</h1>
        <p className="mt-2 text-[#854F6C]">
          Raise RFQs, send requests and track responses.
        </p>
      </div>
    </RoleGuard>
  );
}