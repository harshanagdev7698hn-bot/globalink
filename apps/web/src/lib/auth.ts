import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || "super-secret-change-this"
);

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "BUYER" | "CONSULTANT" | "LAB" | "SELLER";
};

export async function createAuthToken(user: AuthUser) {
  return await new SignJWT({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyAuthToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as AuthUser;
}