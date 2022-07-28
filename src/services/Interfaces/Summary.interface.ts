import { BankClientTransactions } from "@prisma/client";

export interface ISummary {
    clientId: string;
    clientName: string;
    sucursal: string;
    total: number;
    transactions: BankClientTransactions[];
}