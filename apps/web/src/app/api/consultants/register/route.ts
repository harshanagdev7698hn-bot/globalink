import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("globalink_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Login required" },
        { status: 401 }
      );
    }

    const user = await verifyAuthToken(token);
    const body = await req.json();

    const existing = await prisma.consultantProfile.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Consultant profile already exists" },
        { status: 409 }
      );
    }

    const profile = await prisma.consultantProfile.create({
      data: {
        userId: user.id,
        company: body.company || null,
        expertise: body.expertise || body.headline || "Consultant",
        country: body.country || "India",
        city: body.city || null,
        services: body.services || body.categories || "Compliance",
        experienceYears: Number(body.experienceYears || 0),
        pricing: body.pricing || body.hourlyRate || null,
        phone: body.phone || null,
        whatsapp: body.whatsapp || null,
        website: body.website || null,
        bio: body.bio || body.about || null,
        responseTime: body.responseTime || null,
        gstNumber: body.gstNumber || null,
        msmeNumber: body.msmeNumber || null,
        gstFile: body.gstFile || null,
        msmeFile: body.msmeFile || null,
        verificationStatus: "PENDING",
        isVerified: false,
        verified: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Consultant registered successfully",
      profile,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register consultant",
        error: String(error),
      },
      { status: 500 }
    );
  }
}