import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const users = await prisma.user.count();

    return NextResponse.json({
      success: true,
      message: "Database connected successfully",
      usersCount: users,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}