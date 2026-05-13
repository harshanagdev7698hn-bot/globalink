import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function LabsPage() {
  return (
    <EnterprisePage
      label="Labs"
      title="Trusted Testing & Calibration Labs"
      desc="Manage verified labs, NABL details, testing categories and documents."
      cards={[
        { title: "NABL Labs", desc: "Accredited testing and calibration labs.", tag: "NABL" },
        { title: "Product Testing", desc: "Testing support for certification and compliance.", tag: "Testing" },
        { title: "Lab Documents", desc: "Maintain reports, scope and verification documents.", tag: "Docs" },
      ]}
    />
  );
}