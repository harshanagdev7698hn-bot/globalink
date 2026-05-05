import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    products: [],
    message: "Product seller API is disabled until product model is added.",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Product creation API is disabled until product model is added.",
  });
}