import { prisma } from "@/lib/db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await prisma.consultantProfile.count();
    const one = await prisma.consultantProfile.findFirst({
      select: { id: true, displayName: true },
    });
    return new Response(JSON.stringify({ ok: true, count, one }, null, 2), {
      headers: { "content-type": "application/json" },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ ok: false, name: e?.name, code: e?.code, message: e?.message }, null, 2),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}
