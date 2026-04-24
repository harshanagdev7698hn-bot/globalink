import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const count = await prisma.consultantProfile.count();

    const one = await prisma.consultantProfile.findFirst({
      select: {
        id: true,
        company: true,
        expertise: true,
        country: true,
        city: true,
        services: true,
      },
    });

    return Response.json({
      ok: true,
      count,
      one,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}