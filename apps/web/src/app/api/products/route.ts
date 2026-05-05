import { NextResponse } from "next/server";

const products = [
  {
    id: "isi-product",
    name: "ISI Certified Product",
    category: "Certified Product",
    certificationTag: "ISI / BIS",
    seller: "Verified Seller",
  },
  {
    id: "lab-equipment",
    name: "Lab Testing Equipment",
    category: "Lab Equipment",
    certificationTag: "Verified Equipment",
    seller: "Verified Seller",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    products,
  });
}

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Product creation is disabled until Product model is added.",
  });
}