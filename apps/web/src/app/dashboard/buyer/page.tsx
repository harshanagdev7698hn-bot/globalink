import { StatCard } from "@/components/dashboard/stat-card";
import { ActivityTable } from "@/components/dashboard/activity-table";
import { NotificationsPanel } from "@/components/dashboard/notifications-panel";
import { ProfileSummary } from "@/components/dashboard/profile-summary";

export default function BuyerDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-[#dfb6b2] bg-white shadow-sm">
        <div className="premium-gradient px-6 py-8 text-white">
          <p className="text-sm uppercase tracking-wide text-[#FBE4D8]">
            Buyer Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Procurement & RFQ Management
          </h1>
          <p className="mt-2 text-sm text-[#FBE4D8]">
            Create RFQs, compare proposals, manage orders and track spending.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Active RFQs" value="14" helper="Open procurement requests" tone="blue" />
        <StatCard title="Proposals" value="39" helper="Received from vendors" tone="violet" />
        <StatCard title="Orders" value="11" helper="In progress" tone="amber" />
        <StatCard title="Spend" value="₹12.8L" helper="Total procurement value" tone="green" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <ActivityTable />
        <div className="space-y-6">
          <NotificationsPanel />
          <ProfileSummary title="Buyer Account" role="Buyer" status="Verified" />
        </div>
      </div>
    </div>
  );
}