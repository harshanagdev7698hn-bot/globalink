import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "Consultant registered successfully",
      data: body,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error" },
      { status: 500 }
    );
  }
}