import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        seller: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
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

    if (user.role !== "SELLER" && user.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, message: "Only sellers can add products" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { title, description, price, category } = body;

    if (!title || !description || !price || !category) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price: Number(price),
        category,
        sellerId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create product",
        error: String(error),
      },
      { status: 500 }
    );
  }
}