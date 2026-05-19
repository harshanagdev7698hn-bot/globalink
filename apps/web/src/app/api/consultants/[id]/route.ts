import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const demoConsultants: Record<string, any> = {
  "rk-compliance": {
    id: "rk-compliance",
    role: "CONSULTANT",

    name: "RK Compliance Solutions",
    company: "RK Compliance Solutions",

    email: "rk@example.com",
    phone: "+91 9876543210",

    city: "Ahmedabad",
    country: "India",

    status: "VERIFIED",

    consultantProfile: {
      services:
        "BIS Certification, ISI Mark, CRS Registration, QCO, Factory Audit, Lab Testing",

      experience: "8+ Years",

      pricing: "₹15,000 onwards",

      shortBio:
        "Professional compliance consultant helping manufacturers with BIS, ISI, CRS, testing and documentation support.",

      msmeNumber: "MSME-VERIFIED",
      msmeFile: null,
    },
  },
};

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;

    console.log("CONSULTANT REQUEST:", id);

    if (demoConsultants[id]) {
      return NextResponse.json({
        success: true,
        consultant: demoConsultants[id],
      });
    }

    const consultant = await prisma.user.findFirst({
      where: {
        OR: [
          { id: id },
          { name: { contains: id, mode: "insensitive" } },
          { company: { contains: id, mode: "insensitive" } },
        ],
      },

      include: {
        consultantProfile: true,
      },
    });

    if (!consultant) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultant not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      consultant,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}