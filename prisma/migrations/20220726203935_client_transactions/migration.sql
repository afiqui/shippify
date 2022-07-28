/*
  Warnings:

  - Added the required column `base_price` to the `bank_client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commissions` to the `bank_client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insurance` to the `bank_client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `services` to the `bank_client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bank_client" ADD COLUMN     "base_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "commissions" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "insurance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "services" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "client_transactions" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "client_transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client_transactions" ADD CONSTRAINT "client_transactions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "bank_client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
