import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function GET() {
  try {
    const consultants = await prisma.consultantProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      consultants,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        consultants: [],
        message: "Failed to fetch consultants",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

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
      where: { userId: user.id },
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
        expertise: body.expertise,
        country: body.country,
        city: body.city || null,
        services: body.services,
        experienceYears: Number(body.experienceYears || 0),
        pricing: body.pricing || null,
        phone: body.phone || null,
        whatsapp: body.whatsapp || null,
        website: body.website || null,
        bio: body.bio || null,
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
      profile,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create consultant profile",
        error: String(error),
      },
      { status: 500 }
    );
  }
}