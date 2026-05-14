import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const demoConsultants: Record<string, any> = {
  "rk-compliance": {
    id: "rk-compliance",
    name: "RK Compliance Solutions",
    company: "RK Compliance Solutions",
    email: "rk@example.com",
    phone: "+91 98765 43210",
    city: "Ahmedabad",
    country: "India",
    status: "VERIFIED",
    consultantProfile: {
      services: "BIS ISI, CRS, QCO, Factory Audit, Lab Testing",
      experience: "8+ Years",
      pricing: "₹15,000 onwards",
      shortBio:
        "Professional compliance consultant helping manufacturers and importers with BIS certification, CRS registration, factory audit preparation and regulatory documentation.",
      msmeNumber: "MSME Verified",
      msmeFile: null,
    },
  },
};

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const demo = demoConsultants[params.id];

    if (demo) {
      return NextResponse.json({ success: true, consultant: demo });
    }

    const consultant = await prisma.user.findUnique({
      where: { id: params.id },
      include: { consultantProfile: true },
    });

    if (!consultant || consultant.role !== "CONSULTANT") {
      return NextResponse.json(
        { success: false, message: "Consultant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, consultant });
  } catch (error) {
    console.error("CONSULTANT_PROFILE_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Failed to load consultant profile" },
      { status: 500 }
    );
  }
}