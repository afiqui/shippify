/*
  Warnings:

  - You are about to drop the `client_transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "client_transactions" DROP CONSTRAINT "client_transactions_client_id_fkey";

-- DropTable
DROP TABLE "client_transactions";

-- CreateTable
CREATE TABLE "bank_client_transactions" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "bank_client_transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bank_client_transactions" ADD CONSTRAINT "bank_client_transactions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "bank_client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
