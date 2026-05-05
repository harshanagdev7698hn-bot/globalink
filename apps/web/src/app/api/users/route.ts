import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        country: true,
        city: true,
        phone: true,
        whatsapp: true,
        company: true,
        gstNumber: true,
        gstFile: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        users: [],
        message: "Failed to fetch users",
        error: String(error),
      },
      { status: 500 }
    );
  }
}