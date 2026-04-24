import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET /api/consultants?q=&country=
router.get("/", async (req, res) => {
  const q = String(req.query.q || "").toLowerCase().trim();
  const country = String(req.query.country || "").toUpperCase().trim();

  const data = await prisma.consultant.findMany({
    where: {
      AND: [
        q
          ? {
              OR: [
                { displayName: { contains: q, mode: "insensitive" } },
                { headline: { contains: q, mode: "insensitive" } },
              ],
            }
          : {},
        country ? { country } : {},
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  res.json(data);
});

export default router;
