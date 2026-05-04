import { NextResponse } from "next/server";

export async function PATCH() {
  return NextResponse.json({
    success: true,
    message: "Certification approval/update workflow is disabled in Globalink.",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Certification approval/update workflow is disabled in Globalink.",
  });
}