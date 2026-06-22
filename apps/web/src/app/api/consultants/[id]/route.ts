import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const id = decodeURIComponent(context.params.id);

    const consultant = await prisma.user.findFirst({
      where: {
        role: "CONSULTANT",
        OR: [
          { id },
          { name: { contains: id, mode: "insensitive" } },
          { company: { contains: id, mode: "insensitive" } },
        ],
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
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}