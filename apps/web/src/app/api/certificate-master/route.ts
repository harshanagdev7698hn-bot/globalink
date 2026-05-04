import { NextResponse } from "next/server";

const certificates = [
  { id: "bis", name: "BIS", category: "Product Certification" },
  { id: "isi", name: "ISI Mark", category: "Product Certification" },
  { id: "iso", name: "ISO", category: "System Certification" },
  { id: "fssai", name: "FSSAI", category: "Food Certification" },
  { id: "ce", name: "CE", category: "Export / EU Compliance" },
  { id: "fda", name: "FDA", category: "Healthcare / Food Compliance" },
  { id: "nabl", name: "NABL", category: "Lab Accreditation" },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    certificates,
  });
}