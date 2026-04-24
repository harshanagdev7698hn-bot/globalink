import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const consultantId = context.params.id;

    const reviews = await prisma.review.findMany({
      where: {
        consultantId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      reviews,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reviews",
        error: String(error),
      },
      { status: 500 }
    );
  }
}