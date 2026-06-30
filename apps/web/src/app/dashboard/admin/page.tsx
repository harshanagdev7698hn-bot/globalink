import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function AdminDashboardPage() {
  return (
    <EnterprisePage
      label="Admin Dashboard"
      title="Admin Control Center"
      desc="Review user submissions, manage verified users, and track rejected applications from one place."
      cards={[
        {
          title: "Pending Review",
          desc: "Approve or reject users waiting for verification.",
          tag: "Review",
          href: "/dashboard/admin/pending",
        },
        {
          title: "Verified Users",
          desc: "View users who are already verified on Globalink.",
          tag: "Verified",
          href: "/dashboard/admin/verified",
        },
        {
          title: "Rejected Users",
          desc: "View users whose verification requests were rejected.",
          tag: "Rejected",
          href: "/dashboard/admin/rejected",
        },
      ]}
    />
  );
}