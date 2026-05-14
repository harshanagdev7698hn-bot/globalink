import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import crypto from "crypto";

export const dynamic = "force-dynamic";

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      password,
      role,
      phone,
      whatsapp,
      country,
      city,
      company,
      gstNumber,
    } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword(password),
        role,
        phone,
        whatsapp,
        country,
        city,
        company,
        gstNumber,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Account created successfully",
      user,
    });
  } catch (error) {
    console.error("SIGNUP_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Signup failed" },
      { status: 500 }
    );
  }
}