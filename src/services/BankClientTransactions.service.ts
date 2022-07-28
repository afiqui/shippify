import { BankClientTransactions } from '@prisma/client';
import { uuid } from 'uuidv4';
import { BankClientTransactionsRepository } from '../repositories/BankClientTransactions.repository';
import { CreateTransactionsDTO, GetTransactionsDTO } from '../routes/dto/BankClientTransactions.dto';

export class BankClientTransactionsService {
    private readonly bankClientTransactionsRepository: BankClientTransactionsRepository;
    constructor(bankClientTransactionsRepository: BankClientTransactionsRepository) {
        this.bankClientTransactionsRepository = bankClientTransactionsRepository;
    }

    public async create(createTransactionsDTO: CreateTransactionsDTO): Promise<BankClientTransactions> {
        const transactionId = uuid();
        return await this.bankClientTransactionsRepository.createTransaction(transactionId, createTransactionsDTO);        
    }

    public async getTransactions(clientId: string): Promise<BankClientTransactions[]> {
        return await this.bankClientTransactionsRepository.getTransactions(clientId);
    }
}