import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name || body.fullName;
    const role = body.role || "BUYER";

    if (!name || !body.email || !body.password || !body.phone || !body.country || !body.city) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    if (role === "CONSULTANT" && (!body.services || !body.experience)) {
      return NextResponse.json(
        { success: false, message: "Consultant details missing" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email: body.email,
        password: hashedPassword,
        role,
        phone: body.phone,
        whatsapp: body.whatsapp || null,
        company: body.company || null,
        country: body.country,
        city: body.city,
        gstNumber: body.gstNumber || null,

        ...(role === "CONSULTANT"
          ? {
              consultantProfile: {
                create: {
                  services: body.services || null,
                  experience: body.experience || null,
                  pricing: body.startingPrice || body.pricing || null,
                  msmeNumber: body.msme || body.msmeNumber || null,
                  shortBio: body.bio || body.shortBio || null,
                },
              },
            }
          : {}),
      },
      include: {
        consultantProfile: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.error("SIGNUP_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}