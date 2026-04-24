import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const status = body.status;

    if (!["PENDING", "APPROVED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    const updated = await prisma.consultantProfile.update({
      where: {
        id: params.id,
      },
      data: {
        verificationStatus: status,
        isVerified: status === "APPROVED",
        verified: status === "APPROVED",
      },
    });

    return NextResponse.json({
      success: true,
      message: `Consultant ${status.toLowerCase()} successfully`,
      consultant: updated,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Verification update failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}