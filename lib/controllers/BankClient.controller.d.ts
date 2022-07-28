import { BankClientService } from '../services/BankClient.service';
export declare class BankClientController {
    private readonly bankClientService;
    constructor(bankClientService: BankClientService);
    create(req: any, res: any): Promise<void>;
}
