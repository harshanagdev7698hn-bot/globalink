/*
  Warnings:

  - Added the required column `consultantId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConsultantProfile" ADD COLUMN     "gstFile" TEXT,
ADD COLUMN     "gstNumber" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "msmeFile" TEXT,
ADD COLUMN     "msmeNumber" TEXT,
ADD COLUMN     "verificationStatus" TEXT NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "consultantId" TEXT NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL;
