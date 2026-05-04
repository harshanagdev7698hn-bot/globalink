import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const consultants = await prisma.user.findMany({
      where: {
        role: "CONSULTANT",
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        consultantProfile: true,
      },
    });

    return NextResponse.json({
      success: true,
      consultants,
    });
  } catch (error) {
    console.error("ADMIN_CONSULTANTS_ERROR", error);

    return NextResponse.json(
      {
        success: false,
        consultants: [],
        error: "Failed to load consultants",
      },
      { status: 500 }
    );
  }
}