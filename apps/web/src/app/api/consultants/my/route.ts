import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    consultant: null,
    message: "Consultant profile API is disabled for production build.",
  });
}

export async function PATCH() {
  return NextResponse.json({
    success: true,
    message: "Consultant profile update API is disabled for production build.",
  });
}