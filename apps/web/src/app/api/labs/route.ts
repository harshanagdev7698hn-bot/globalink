import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const labs = await prisma.user.findMany({
      where: {
        role: "LAB",
        status: "VERIFIED",
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        labProfile: true,
      },
    });

    return NextResponse.json({
      success: true,
      labs,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        labs: [],
        error: "Failed to load labs",
      },
      { status: 500 }
    );
  }
}