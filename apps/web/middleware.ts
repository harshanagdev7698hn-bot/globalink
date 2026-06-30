import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { verifyAuthToken } from "@/lib/auth";

function isAllowedForPath(pathname: string, role: string) {
  if (pathname === "/dashboard") return true;
  if (pathname.startsWith("/dashboard/settings")) return true;
  if (pathname.startsWith("/dashboard/requests")) return true;

  if (pathname.startsWith("/dashboard/admin")) return role === "ADMIN";
  if (pathname.startsWith("/dashboard/buyer")) return role === "BUYER" || role === "ADMIN";
  if (pathname.startsWith("/dashboard/consultants")) return role === "CONSULTANT" || role === "ADMIN";
  if (pathname.startsWith("/dashboard/labs")) return role === "LAB" || role === "ADMIN";
  if (pathname.startsWith("/dashboard/marketplace")) return role === "SELLER" || role === "ADMIN";

  return true;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isDashboardPage = pathname.startsWith("/dashboard");

  let role: string | null = null;

  const nextAuthToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (nextAuthToken?.role) {
    role = String(nextAuthToken.role);
  }

  if (!role) {
    const customToken = req.cookies.get("globalink_token")?.value;

    if (customToken) {
      try {
        const user = await verifyAuthToken(customToken);
        role = user.role;
      } catch {
        role = null;
      }
    }
  }

  if (!role) {
    if (isDashboardPage) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }

  if (isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isDashboardPage && !isAllowedForPath(pathname, role)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};