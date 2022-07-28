import { CreateBankClientDTO, DeleteBankClientDTO, UpdateBankClientDTO } from '../routes/dto/BankClient.dto';
import { BankClientService } from '../services/BankClient.service';
import Express from 'express';

export class BankClientController {

    private readonly bankClientService: BankClientService;
    constructor(bankClientService: BankClientService) {
        this.bankClientService = bankClientService;
    }

    public async create(req: Express.Request, res: Express.Response) {
        try {
            const createBankClientDTO: CreateBankClientDTO = req.body;
            const bankClient = await this.bankClientService.create(createBankClientDTO);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async get(req: Express.Request, res: Express.Response) {
        try {
            const id: string = req.params.id;
            if (!id) {
                res.status(400).send('Id is required');
            }
            const bankClient = await this.bankClientService.get(id);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async getAll(_req: Express.Request, res: Express.Response) {
        try {
            const bankClient = await this.bankClientService.getAll();
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async update(req: Express.Request, res: Express.Response) {
        try {  
            const updateBankClientDTO: UpdateBankClientDTO = req.body; 
            const bankClient = await this.bankClientService.update(updateBankClientDTO);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async delete(req: Express.Request, res: Express.Response) {
        try {  
            const deleteBankClientDTO: DeleteBankClientDTO = req.body; 
            const bankClient = await this.bankClientService.delete(deleteBankClientDTO);
            res.send(bankClient);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async getClientSummary(req: Express.Request, res: Express.Response) {
        try {
            const id = req.query.id as string;
            const startDate = req.query.startDate as string;
            const endDate: string = req.query.endDate as string;
            if (!id) {
                res.status(400).send('Id is required');
            }           
            const summary = await this.bankClientService.getClientSummary(id, startDate, endDate);
            res.send(summary);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}