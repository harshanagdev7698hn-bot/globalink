import { NextResponse } from "next/server";
import { consultantRegisterSchema } from "@/lib/validators";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // create a small file exporting your NextAuth config if needed
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions as any);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = consultantRegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { email: session.user.email },
    update: {},
    create: { email: session.user.email }
  });

  const exists = await prisma.consultantProfile.findUnique({ where: { userId: user.id }});
  if (exists) return NextResponse.json({ error: "Already registered" }, { status: 400 });

  const data = parsed.data;

  const profile = await prisma.consultantProfile.create({
    data: {
      userId: user.id,
      displayName: data.displayName,
      country: data.country,
      languages: data.languages,
      headline: data.headline,
      about: data.about,
      currency: data.currency,
      hourlyRateCents: data.hourlyRateCents ?? null,
      categories: {
        create: data.categories.map((c) => ({ category: { connect: { id: c } } }))
      }
    }
  });

  return NextResponse.json({ ok: true, profile });
}
