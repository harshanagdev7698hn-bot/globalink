import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { userId, status } = body;

    if (!userId || !status) {
      return NextResponse.json(
        { error: "User ID and status are required." },
        { status: 400 }
      );
    }

    if (!["PENDING", "VERIFIED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid verification status." },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      message: "User verification status updated.",
      user,
    });
  } catch (error) {
    console.error("ADMIN_VERIFY_ERROR", error);

    return NextResponse.json(
      { error: "Failed to update verification status." },
      { status: 500 }
    );
  }
}