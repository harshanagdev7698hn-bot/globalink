import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const consultant = await prisma.consultantProfile.findUnique({
      where: {
        id: context.params.id,
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

    if (!consultant) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultant not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      consultant,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch consultant",
        error: String(error),
      },
      { status: 500 }
    );
  }
}