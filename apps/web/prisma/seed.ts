import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.certificateMaster.deleteMany();

  await prisma.certificateMaster.createMany({
    data: [
      {
        name: "ISO 9001",
        authority: "ISO",
        country: "Global",
        category: "Quality",
        type: "ISO",
      },
      {
        name: "ISO 14001",
        authority: "ISO",
        country: "Global",
        category: "Environment",
        type: "ISO",
      },
      {
        name: "ISO 22000",
        authority: "ISO",
        country: "Global",
        category: "Food Safety",
        type: "ISO",
      },
      {
        name: "BIS CRS",
        authority: "BIS",
        country: "India",
        category: "Electronics",
        type: "BIS",
      },
      {
        name: "ISI Mark",
        authority: "BIS",
        country: "India",
        category: "Product Safety",
        type: "BIS",
      },
      {
        name: "FSSAI License",
        authority: "FSSAI",
        country: "India",
        category: "Food",
        type: "FSSAI",
      },
      {
        name: "FDA Approval",
        authority: "FDA",
        country: "USA",
        category: "Medical",
        type: "FDA",
      },
      {
        name: "CE Marking",
        authority: "European Union",
        country: "Europe",
        category: "Electronics",
        type: "CE",
      },
      {
        name: "RoHS",
        authority: "European Union",
        country: "Europe",
        category: "Electronics",
        type: "RoHS",
      },
      {
        name: "GMP",
        authority: "WHO / Regulatory Body",
        country: "Global",
        category: "Pharma",
        type: "GMP",
      },
      {
        name: "HACCP",
        authority: "Food Safety Authority",
        country: "Global",
        category: "Food",
        type: "HACCP",
      },
    ],
  });

  console.log("Certificate master data seeded successfully.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });