import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function run() {
  const u1 = await prisma.user.upsert({
    where: { email: "riya@example.com" },
    update: {},
    create: { email: "riya@example.com", name: "Riya Shah" },
  });

  const u2 = await prisma.user.upsert({
    where: { email: "aarav@example.com" },
    update: {},
    create: { email: "aarav@example.com", name: "Aarav Mehta" },
  });

  await prisma.consultantProfile.upsert({
    where: { userId: u1.id },
    update: {},
    create: {
      userId: u1.id,
      displayName: "Riya Shah",
      headline: "BIS & ISO expert",
      country: "IN",
      languages: ["en", "hi"],
      rating: 4.7,
      ratingCount: 32,
    },
  });

  await prisma.consultantProfile.upsert({
    where: { userId: u2.id },
    update: {},
    create: {
      userId: u2.id,
      displayName: "Aarav Mehta",
      headline: "GeM onboarding specialist",
      country: "IN",
      languages: ["en", "hi"],
      rating: 4.5,
      ratingCount: 18,
    },
  });
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
