import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function MarketplacePage() {
  return (
    <EnterprisePage
      label="Marketplace"
      title="Compliance Marketplace"
      desc="List certified products, services and industrial compliance support."
      cards={[
        { title: "Certified Products", desc: "Showcase BIS/approved compliance products.", tag: "Products" },
        { title: "Service Listings", desc: "Consultants and labs can list their services.", tag: "Services" },
        { title: "Buyer Leads", desc: "Connect genuine buyers with verified providers.", tag: "Leads" },
      ]}
    />
  );
}