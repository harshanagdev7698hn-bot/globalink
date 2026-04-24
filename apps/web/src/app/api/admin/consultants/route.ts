import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const consultants = await prisma.consultantProfile.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
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
        message: "Failed to load consultants",
        error: String(error),
      },
      { status: 500 }
    );
  }
}