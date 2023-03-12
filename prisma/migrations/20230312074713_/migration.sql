/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Shio" (
    "id" SERIAL NOT NULL,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "personality" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "description" TEXT NOT NULL DEFAULT '',
    "years" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "Shio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shio_name_key" ON "Shio"("name");
