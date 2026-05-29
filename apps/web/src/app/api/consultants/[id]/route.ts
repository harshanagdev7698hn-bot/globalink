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
    gstNumber: "GST Verified",
    gstFile: null,
    consultantProfile: {
      services: "BIS Certification, ISI Mark, CRS Registration, QCO, Factory Audit, Lab Testing",
      experience: "8+ Years",
      pricing: "₹15,000 onwards",
      shortBio: "Professional compliance consultant helping manufacturers with BIS, ISI, CRS, testing and documentation support.",
      msmeNumber: "MSME-VERIFIED",
      msmeFile: null,
    },
  },

  "global-regulatory": {
    id: "global-regulatory",
    role: "CONSULTANT",
    name: "Global Regulatory Experts",
    company: "Global Regulatory Experts",
    email: "global@example.com",
    phone: "+91 9876543211",
    city: "Delhi",
    country: "India",
    status: "VERIFIED",
    gstNumber: "GST Verified",
    gstFile: null,
    consultantProfile: {
      services: "CDSCO, Medical Devices, Import License, Regulatory Documentation",
      experience: "12+ Years",
      pricing: "On Request",
      shortBio: "Regulatory experts for medical device, CDSCO and import license compliance support.",
      msmeNumber: "MSME-VERIFIED",
      msmeFile: null,
    },
  },

  "epr-green": {
    id: "epr-green",
    role: "CONSULTANT",
    name: "EPR Green Consultants",
    company: "EPR Green Consultants",
    email: "epr@example.com",
    phone: "+91 9876543212",
    city: "Mumbai",
    country: "India",
    status: "VERIFIED",
    gstNumber: "GST Verified",
    gstFile: null,
    consultantProfile: {
      services: "EPR, Plastic Waste, Battery Waste, E-Waste Compliance",
      experience: "6+ Years",
      pricing: "On Request",
      shortBio: "EPR and environmental compliance support for industries.",
      msmeNumber: "MSME-VERIFIED",
      msmeFile: null,
    },
  },

  "iso-tech": {
    id: "iso-tech",
    role: "CONSULTANT",
    name: "ISO Tech Advisors",
    company: "ISO Tech Advisors",
    email: "iso@example.com",
    phone: "+91 9876543213",
    city: "Pune",
    country: "India",
    status: "VERIFIED",
    gstNumber: "GST Verified",
    gstFile: null,
    consultantProfile: {
      services: "ISO 9001, Factory Audit, Documentation, Quality Compliance",
      experience: "10+ Years",
      pricing: "On Request",
      shortBio: "ISO and factory compliance consultant for businesses.",
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
    const id = decodeURIComponent(context.params.id);

    if (demoConsultants[id]) {
      return NextResponse.json({
        success: true,
        consultant: demoConsultants[id],
      });
    }

    const consultant = await prisma.user.findFirst({
      where: {
        role: "CONSULTANT",
        OR: [
          { id },
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
        { success: false, message: "Consultant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      consultant,
    });
  } catch (error) {
    console.error("CONSULTANT_DETAIL_ERROR", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}