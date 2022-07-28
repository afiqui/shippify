import { BankClientService } from '../services/BankClient.service';
import Express from 'express';
import { CreateTransactionsDTO, GetTransactionsDTO } from '../routes/dto/BankClientTransactions.dto';
import { BankClientTransactionsService } from '../services/BankClientTransactions.service';

export class BankClientTransactionsController {

    private readonly bankClientTransactionsService: BankClientTransactionsService;
    constructor(bankClientTransactionsService: BankClientTransactionsService) {
        this.bankClientTransactionsService = bankClientTransactionsService;
    }

    public async createTransaction(req: Express.Request, res: Express.Response) {
        try {
            const createBankClientDTO: CreateTransactionsDTO = req.body;
            const bankClient = await this.bankClientTransactionsService.create(createBankClientDTO);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async getTransactions(req: Express.Request, res: Express.Response) {
        try {
            const { clientId } = req.query;
            const bankClient = await this.bankClientTransactionsService.getTransactions(<string>clientId);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}