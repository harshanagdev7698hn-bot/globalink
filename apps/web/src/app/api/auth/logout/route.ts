import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({
    success: true,
    message: "Logged out",
  });

  res.cookies.set("globalink_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return res;
}

export async function GET() {
  const res = NextResponse.redirect(new URL("/", "http://localhost:3000"));

  res.cookies.set("globalink_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return res;
}