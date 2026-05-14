import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("globalink_user");

    if (!userCookie?.value) {
      return NextResponse.json({
        success: false,
        user: null,
      });
    }

    const user = JSON.parse(userCookie.value);

    return NextResponse.json({
      success: true,
      user,
    });
  } catch {
    return NextResponse.json({
      success: false,
      user: null,
    });
  }
}