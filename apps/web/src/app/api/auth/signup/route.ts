import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name || body.fullName;
    const role = body.role || "BUYER";

    // Required validation
    if (
      !name ||
      !body.email ||
      !body.password ||
      !body.phone ||
      !body.country ||
      !body.city
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        {
          status: 400,
        }
      );
    }

    // Consultant validation
    if (
      role === "CONSULTANT" &&
      (!body.services || !body.experience)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultant details missing",
        },
        {
          status: 400,
        }
      );
    }

    // Existing user check
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Password hash
    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    // Create user
    const user = await prisma.user.create({
      data: {
        name: name,

        email: body.email,

        password: hashedPassword,

        role: role,

        phone: body.phone,

        whatsapp:
          body.whatsapp || null,

        company:
          body.company || null,

        country:
          body.country,

        city:
          body.city,

        gstNumber:
          body.gstNumber || null,

        ...(role === "CONSULTANT"
          ? {
              consultantProfile: {
                create: {
                  services:
                    body.services || null,

                  experience:
                    body.experience || null,

                  pricing:
                    body.pricing ||
                    body.startingPrice ||
                    null,

                  msmeNumber:
                    body.msme ||
                    body.msmeNumber ||
                    null,

                  shortBio:
                    body.bio ||
                    body.shortBio ||
                    null,
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

      message:
        "Registration successful",

      user,
    });
  } catch (error: any) {
    console.error(
      "SIGNUP_ERROR",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Server error",

        code:
          error?.code || null,

        details:
          error?.meta || null,
      },

      {
        status: 500,
      }
    );
  }
}