import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    reviews: [],
    message: "Review API is disabled until Review model is added.",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Review creation is disabled until Review model is added.",
  });
}