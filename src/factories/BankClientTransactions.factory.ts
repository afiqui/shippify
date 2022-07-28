import { BankClientTransactionsController } from "../controllers/BankClientTransactions.controller";
import { BankClientTransactionsRepository } from "../repositories/BankClientTransactions.repository";
import { BankClientTransactionsService } from "../services/BankClientTransactions.service";

export class BankClientTransactionsFactory{
    static createBankClientTransactionsController(){
        const bankClientTransactionsRepository = new BankClientTransactionsRepository();
        const bankClientTransactionsService = new BankClientTransactionsService(bankClientTransactionsRepository); 
        return new BankClientTransactionsController(bankClientTransactionsService);
    }
}