import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, company, requirement, source } = body;

    if (!fullName || !email || !requirement) {
      return NextResponse.json(
        { success: false, message: "Name, email and requirement are required" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName,
        email,
        phone,
        company,
        requirement,
        source: source || "CONTACT_PAGE",
        status: "NEW",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiry,
    });
  } catch (error) {
    console.error("INQUIRY_CREATE_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}