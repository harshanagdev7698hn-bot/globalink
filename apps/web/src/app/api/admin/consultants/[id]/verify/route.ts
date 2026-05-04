import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const status = body.status;

    if (!["PENDING", "VERIFIED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status" },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Verification status updated",
      user,
    });
  } catch (error) {
    console.error("CONSULTANT_VERIFY_ERROR", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update verification status",
      },
      { status: 500 }
    );
  }
}