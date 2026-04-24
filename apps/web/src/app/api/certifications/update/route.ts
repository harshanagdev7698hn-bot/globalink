import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function PATCH(req: NextRequest) {
  try {
    const token = req.cookies.get("globalink_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await verifyAuthToken(token);

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, message: "Admin access required" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { id, status, adminRemark } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "ID and status required" },
        { status: 400 }
      );
    }

    const updated = await prisma.certification.update({
      where: { id },
      data: {
        status,
        adminRemark: adminRemark || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status updated",
      certification: updated,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Update failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}