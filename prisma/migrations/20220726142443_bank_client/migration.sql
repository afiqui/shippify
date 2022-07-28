/*
  Warnings:

  - You are about to drop the `BankClient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sucursal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BankClient" DROP CONSTRAINT "BankClient_sucursal_id_fkey";

-- DropTable
DROP TABLE "BankClient";

-- DropTable
DROP TABLE "Sucursal";

-- CreateTable
CREATE TABLE "sucursal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "sucursal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "sucursal_id" TEXT,

    CONSTRAINT "bank_client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bank_client" ADD CONSTRAINT "bank_client_sucursal_id_fkey" FOREIGN KEY ("sucursal_id") REFERENCES "sucursal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
