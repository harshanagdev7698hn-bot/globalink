/*
  Warnings:

  - Added the required column `services` to the `ConsultantProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ConsultantProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConsultantProfile" ADD COLUMN     "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "experienceYears" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "pricing" TEXT,
ADD COLUMN     "responseTime" TEXT,
ADD COLUMN     "services" TEXT NOT NULL,
ADD COLUMN     "totalProjects" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalReviews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "website" TEXT,
ADD COLUMN     "whatsapp" TEXT;
