import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken } from "@/lib/auth";

function isAllowedForPath(pathname: string, role: string) {
  if (pathname === "/dashboard") return true;
  if (pathname.startsWith("/dashboard/settings")) return true;
  if (pathname.startsWith("/dashboard/requests")) return true;

  if (pathname.startsWith("/dashboard/admin")) {
    return role === "ADMIN";
  }

  if (pathname.startsWith("/dashboard/buyer")) {
    return role === "BUYER" || role === "ADMIN";
  }

  if (pathname.startsWith("/dashboard/consultants")) {
    return role === "CONSULTANT" || role === "ADMIN";
  }

  if (pathname.startsWith("/dashboard/labs")) {
    return role === "LAB" || role === "ADMIN";
  }

  if (pathname.startsWith("/dashboard/marketplace")) {
    return role === "SELLER" || role === "ADMIN";
  }

  return true;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("globalink_token")?.value;

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isDashboardPage = pathname.startsWith("/dashboard");

  if (!token) {
    if (isDashboardPage) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  try {
    const user = await verifyAuthToken(token);

    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (isDashboardPage) {
      const allowed = isAllowedForPath(pathname, user.role);

      if (!allowed) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.set("globalink_token", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 0,
    });
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};