import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAuthToken } from "@/lib/auth";

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

    const { consultantId, rating, comment } = body;

    if (!consultantId || !rating) {
      return NextResponse.json(
        { success: false, message: "Consultant and rating are required" },
        { status: 400 }
      );
    }

    const numericRating = Number(rating);

    if (numericRating < 1 || numericRating > 5) {
      return NextResponse.json(
        { success: false, message: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    await prisma.review.create({
      data: {
        consultantId,
        userId: user.id,
        rating: numericRating,
        comment: comment || "",
      },
    });

    const allReviews = await prisma.review.findMany({
      where: {
        consultantId,
      },
    });

    const totalReviews = allReviews.length;
    const averageRating =
      totalReviews > 0
        ? allReviews.reduce((sum, item) => sum + item.rating, 0) / totalReviews
        : 0;

    await prisma.consultantProfile.update({
      where: {
        id: consultantId,
      },
      data: {
        averageRating,
        totalReviews,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add review",
        error: String(error),
      },
      { status: 500 }
    );
  }
}