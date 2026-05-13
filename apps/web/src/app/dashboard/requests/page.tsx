import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function RequestsPage() {
  return (
    <EnterprisePage
      label="Requests"
      title="RFQ & Service Requests"
      desc="Manage buyer requests, consultant proposals and service communication."
      cards={[
        { title: "New RFQs", desc: "Review new buyer certification requests.", tag: "RFQ" },
        { title: "Proposals", desc: "Track consultant and lab proposals.", tag: "Quotes" },
        { title: "Status Tracking", desc: "Monitor request progress and approvals.", tag: "Workflow" },
      ]}
    />
  );
}