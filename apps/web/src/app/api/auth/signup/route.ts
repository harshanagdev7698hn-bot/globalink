import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // support both name and fullName
    const name = body.name || body.fullName

    const {
      email,
      password,
      phone,
      whatsapp,
      company,
      country,
      city,
      role,
      gstNumber,
      msme,
      services,
      experience,
      startingPrice,
      bio,
    } = body

    // common validation
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !country ||
      !city
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 }
      )
    }

    // consultant validation only
    if (
      role === "CONSULTANT" &&
      (
        !services ||
        !experience
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultant details missing",
        },
        { status: 400 }
      )
    }

    const existing = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    )

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "BUYER",
        phone,
        whatsapp,
        company,
        country,
        city,
        gstNumber,
        msme,
        services,
        experience,
        startingPrice,
        bio,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      user,
    })

  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    )
  }
}