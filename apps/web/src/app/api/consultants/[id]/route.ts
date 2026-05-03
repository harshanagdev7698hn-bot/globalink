import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const consultant = await prisma.user.findFirst({
      where: {
        id: params.id,
        role: "CONSULTANT",
        status: "VERIFIED",
      },
      include: {
        consultantProfile: true,
      },
    });

    if (!consultant) {
      return NextResponse.json(
        { success: false, message: "Consultant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      consultant,
    });
  } catch (error) {
    console.error("CONSULTANT_DETAIL_ERROR", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load consultant",
        error: String(error),
      },
      { status: 500 }
    );
  }
}