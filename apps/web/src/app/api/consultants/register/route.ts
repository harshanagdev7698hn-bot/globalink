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
      phone,
      whatsapp,
      country,
      city,
      company,
      gstNumber,
      services,
      experience,
      pricing,
      msmeNumber,
      shortBio,
    } = body;

    if (!name || !email || !password || !phone || !country || !city || !services) {
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
        role: "CONSULTANT",
        phone,
        whatsapp,
        country,
        city,
        company,
        gstNumber,
        status: "PENDING",
        consultantProfile: {
          create: {
            services,
            experience,
            pricing,
            msmeNumber,
            shortBio,
          },
        },
      },
      include: {
        consultantProfile: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Consultant registered successfully. Pending admin verification.",
      user,
    });
  } catch (error) {
    console.error("CONSULTANT_REGISTER_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Server error while registering consultant" },
      { status: 500 }
    );
  }
}