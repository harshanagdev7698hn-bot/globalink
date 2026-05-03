import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { consultantProfile: true },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to load profile" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    if (!body.userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: body.userId },
      data: {
        company: body.company || null,
        city: body.city || null,
        country: body.country || null,
        phone: body.phone || null,
        whatsapp: body.whatsapp || null,
      },
    });

    const profile = await prisma.consultantProfile.upsert({
      where: { userId: body.userId },
      update: {
        services: body.services || null,
        experience: body.experience || null,
        pricing: body.pricing || null,
        shortBio: body.shortBio || null,
      },
      create: {
        userId: body.userId,
        services: body.services || null,
        experience: body.experience || null,
        pricing: body.pricing || null,
        shortBio: body.shortBio || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update profile" },
      { status: 500 }
    );
  }
}