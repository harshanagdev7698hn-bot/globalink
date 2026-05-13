import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function AdminPage() {
  return (
    <EnterprisePage
      label="Admin Control"
      title="Admin Verification Panel"
      desc="Review consultants, labs, sellers and buyers before they become visible."
      cards={[
        { title: "Pending Review", desc: "Approve or reject new registered users.", tag: "KYC" },
        { title: "Verified Users", desc: "Manage trusted approved profiles.", tag: "Verified" },
        { title: "Rejected Users", desc: "Track rejected or incomplete applications.", tag: "Risk" },
      ]}
    />
  );
}