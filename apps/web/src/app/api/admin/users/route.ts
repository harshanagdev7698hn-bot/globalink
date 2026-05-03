import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        consultantProfile: true,
        labProfile: true,
        sellerProfile: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("ADMIN_USERS_ERROR", error);

    return NextResponse.json(
      { error: "Failed to load users." },
      { status: 500 }
    );
  }
}