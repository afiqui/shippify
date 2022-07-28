import { BankClientTransactions } from "@prisma/client";
import { CreateTransactionsDTO } from "../routes/dto/BankClientTransactions.dto";
import { BaseRepository } from "./BaseRepository.repository";

export class BankClientTransactionsRepository extends BaseRepository {
    constructor() {
        super();
    }

    public async createTransaction(id: string, createTransactionsDTO: CreateTransactionsDTO): Promise<BankClientTransactions> {
        return await this.bankClientTransactions.create({
            data: {
                id,
                ...createTransactionsDTO
            }
        });
    }

    public async getTransactions(clientId: string): Promise<BankClientTransactions[]> {
        return await this.bankClientTransactions.findMany({
            where: {
                clientId
            }
        });
    }
    

}