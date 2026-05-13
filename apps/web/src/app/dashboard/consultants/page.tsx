import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function ConsultantsPage() {
  return (
    <EnterprisePage
      label="Consultants"
      title="Verified Consultant Network"
      desc="Manage BIS, ISO, CDSCO, EPR, WPC and compliance consultants."
      cards={[
        { title: "BIS Experts", desc: "ISI, CRS, FMCS and QCO consultants.", tag: "BIS" },
        { title: "ISO Consultants", desc: "Quality, safety and management system experts.", tag: "ISO" },
        { title: "Regulatory Experts", desc: "CDSCO, EPR, WPC, TEC and Legal Metrology.", tag: "Compliance" },
      ]}
    />
  );
}