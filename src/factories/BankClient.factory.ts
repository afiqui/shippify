
import { BankClientController } from "../controllers/BankClient.controller";
import { BankClientRepository } from "../repositories/BankClient.repository";
import { BankClientTransactionsRepository } from "../repositories/BankClientTransactions.repository";
import { SucursalRepository } from "../repositories/Sucursal.repository";
import { BankClientService } from "../services/BankClient.service";
import { BankClientTransactionsService } from "../services/BankClientTransactions.service";
import { SucursalService } from "../services/Sucursal.service";

export class BankClientFactory{
    static createBankClientController(){
        const sucursalRepository = new SucursalRepository();
        const sucursalService = new SucursalService(sucursalRepository);
        const bankClientRepository = new BankClientRepository();
        const bankClientTransactionsRepository = new BankClientTransactionsRepository();
        const bankClientTransactionsService = new BankClientTransactionsService(bankClientTransactionsRepository); 
        const bankClientService = new BankClientService(bankClientRepository, bankClientTransactionsService, sucursalService);
        return new BankClientController(bankClientService);
    }
}