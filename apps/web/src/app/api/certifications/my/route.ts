import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuthToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("globalink_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Login required", consultant: null },
        { status: 401 }
      );
    }

    const user = await verifyAuthToken(token);

    const consultant = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        consultantProfile: true,
      },
    });

    return NextResponse.json({
      success: true,
      consultant,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to load consultant profile",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
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

    await prisma.user.update({
      where: { id: user.id },
      data: {
        company: body.company || null,
        country: body.country || null,
        city: body.city || null,
        phone: body.phone || null,
        whatsapp: body.whatsapp || null,
        gstNumber: body.gstNumber || null,
        gstFile: body.gstFile || null,
        status: "PENDING",
      },
    });

    const profile = await prisma.consultantProfile.upsert({
      where: { userId: user.id },
      update: {
        services: body.services || null,
        experience: body.experience || null,
        pricing: body.pricing || null,
        msmeNumber: body.msmeNumber || null,
        msmeFile: body.msmeFile || null,
        shortBio: body.shortBio || null,
      },
      create: {
        userId: user.id,
        services: body.services || null,
        experience: body.experience || null,
        pricing: body.pricing || null,
        msmeNumber: body.msmeNumber || null,
        msmeFile: body.msmeFile || null,
        shortBio: body.shortBio || null,
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