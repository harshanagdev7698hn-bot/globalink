import RoleGuard from "@/components/RoleGuard";

export default function SellerDashboardPage() {
  return (
    <RoleGuard
      allowed={["SELLER", "ADMIN"]}
      message="Only sellers can add and manage products."
    >
      <div className="rounded-3xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-[#190019]">
          Seller Dashboard
        </h1>
        <p className="mt-2 text-[#854F6C]">
          Add products, manage listings and view buyer enquiries.
        </p>
      </div>
    </RoleGuard>
  );
}