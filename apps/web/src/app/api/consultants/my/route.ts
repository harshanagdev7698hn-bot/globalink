import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("globalink_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Login required" },
        { status: 401 }
      );
    }

    const user = await verifyAuthToken(token);

    const profile = await prisma.consultantProfile.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
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
        message: "Failed to fetch consultant profile",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
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

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Consultant profile not found" },
        { status: 404 }
      );
    }

    const profile = await prisma.consultantProfile.update({
      where: {
        userId: user.id,
      },
      data: {
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
        gstFile: body.gstFile || existing.gstFile,
        msmeFile: body.msmeFile || existing.msmeFile,

        verificationStatus: "PENDING",
        isVerified: false,
        verified: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Consultant profile updated successfully",
      profile,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update consultant profile",
        error: String(error),
      },
      { status: 500 }
    );
  }
}