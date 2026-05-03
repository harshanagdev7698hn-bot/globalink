import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Role = "BUYER" | "CONSULTANT" | "LAB" | "SELLER" | "ADMIN";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const role = String(body.role || "BUYER").toUpperCase() as Role;

    if (!["BUYER", "CONSULTANT", "LAB", "SELLER", "ADMIN"].includes(role)) {
      return NextResponse.json(
        { error: "Invalid role selected." },
        { status: 400 }
      );
    }

    if (!body.name || !body.email || !body.password) {
      return NextResponse.json(
        { error: "Name, email and password are required." },
        { status: 400 }
      );
    }

    if (role !== "BUYER" && !body.gstNumber) {
      return NextResponse.json(
        { error: "GST number is required for Consultant, Lab and Seller." },
        { status: 400 }
      );
    }

    if (role !== "BUYER" && !body.gstFile) {
      return NextResponse.json(
        { error: "GST certificate is required for Consultant, Lab and Seller." },
        { status: 400 }
      );
    }

    if (role === "CONSULTANT" && !body.services) {
      return NextResponse.json(
        { error: "Services are required for consultant." },
        { status: 400 }
      );
    }

    if (role === "CONSULTANT" && !body.experience) {
      return NextResponse.json(
        { error: "Experience is required for consultant." },
        { status: 400 }
      );
    }

    if (role === "CONSULTANT" && !body.pricing) {
      return NextResponse.json(
        { error: "Pricing is required for consultant." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists. Please use another email." },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
        role,
        country: body.country || null,
        city: body.city || null,
        phone: body.phone || null,
        whatsapp: body.whatsapp || null,
        company: body.company || null,
        gstNumber: body.gstNumber || null,
        gstFile: body.gstFile || null,
        status: "PENDING",

        consultantProfile:
          role === "CONSULTANT"
            ? {
                create: {
                  services: body.services || "BIS / ISO / Compliance Support",
                  experience: body.experience || "Experienced Consultant",
                  pricing: body.pricing || "Contact for pricing",
                  msmeNumber: body.msmeNumber || null,
                  msmeFile: body.msmeFile || null,
                  shortBio:
                    body.shortBio ||
                    "This consultant is verified by Globalink and available for professional certification and compliance support.",
                },
              }
            : undefined,

        labProfile:
          role === "LAB"
            ? {
                create: {
                  nablFile: body.nablFile || null,
                  bisApprovalFile: body.bisApprovalFile || null,
                  labScope: body.labScope || null,
                  testingCategories: body.testingCategories || null,
                  contactPerson: body.contactPerson || null,
                },
              }
            : undefined,

        sellerProfile:
          role === "SELLER"
            ? {
                create: {
                  bisLicenceNo: body.bisLicenceNo || null,
                  bisLicenceFile: body.bisLicenceFile || null,
                  productCategory: body.productCategory || null,
                  brandName: body.brandName || null,
                  factoryAddress: body.factoryAddress || null,
                },
              }
            : undefined,
      },
      include: {
        consultantProfile: true,
        labProfile: true,
        sellerProfile: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account submitted for verification.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER_ERROR", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while creating account.",
        details: String(error),
      },
      { status: 500 }
    );
  }
}