import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function GET() {
  try {
    const certifications = await prisma.certification.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      certifications,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch certifications",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("globalink_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Login required" },
        { status: 401 }
      );
    }

    const user = await verifyAuthToken(token);
    const body = await req.json();

    const {
      name,
      authority,
      category,
      country,
      documentUrl,
      validTill,
      licenseNumber,
      certificationBody,
      scope,
      isNumber,
      productType,
      factoryLocation,
      foodCategory,
      state,
      approvalType,
      productClass,
    } = body;

    if (!name || !authority || !category || !country) {
      return NextResponse.json(
        { success: false, message: "Name, authority, category and country are required" },
        { status: 400 }
      );
    }

    const certification = await prisma.certification.create({
      data: {
        name,
        authority,
        category,
        country,
        documentUrl: documentUrl || null,
        validTill: validTill ? new Date(validTill) : null,
        licenseNumber: licenseNumber || null,
        certificationBody: certificationBody || null,
        scope: scope || null,
        isNumber: isNumber || null,
        productType: productType || null,
        factoryLocation: factoryLocation || null,
        foodCategory: foodCategory || null,
        state: state || null,
        approvalType: approvalType || null,
        productClass: productClass || null,
        userId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Certification added successfully",
      certification,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create certification",
        error: String(error),
      },
      { status: 500 }
    );
  }
}