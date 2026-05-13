import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function CertificationsPage() {
  return (
    <EnterprisePage
      label="Certifications"
      title="Certification & Compliance Center"
      desc="Track certificate types, service categories and compliance workflows."
      cards={[
        { title: "BIS Certification", desc: "ISI, CRS, FMCS and product certification support.", tag: "BIS" },
        { title: "ISO Certification", desc: "ISO 9001, 14001, 45001 and other systems.", tag: "ISO" },
        { title: "Regulatory Approvals", desc: "CDSCO, WPC, TEC, EPR and Legal Metrology.", tag: "Approval" },
      ]}
    />
  );
}