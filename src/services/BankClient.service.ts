import { BankClient, BankClientTransactions } from '@prisma/client';
import { uuid } from 'uuidv4';
import { BankClientRepository } from '../repositories/BankClient.repository';
import { CreateBankClientDTO, DeleteBankClientDTO, GetBankClientDTO, UpdateBankClientDTO } from '../routes/dto/BankClient.dto';
import { BankClientTransactionsService } from './BankClientTransactions.service';
import { ISummary } from './Interfaces/Summary.interface';
import { SucursalService } from './Sucursal.service';

export class BankClientService {
    private readonly bankClientRepository: BankClientRepository;
    private readonly bankClientTransactionsService: BankClientTransactionsService;
    private readonly sucursalService: SucursalService;

    constructor(
        bankClientRepository: BankClientRepository,
        bankClientTransactionsService: BankClientTransactionsService,
        sucursalService: SucursalService,
    ) {
        this.bankClientRepository = bankClientRepository;
        this.bankClientTransactionsService = bankClientTransactionsService;
        this.sucursalService = sucursalService
    }

    public async create(createBankClientDTO: CreateBankClientDTO): Promise<BankClient> {
        const clientId = uuid();
        return await this.bankClientRepository.create(clientId, createBankClientDTO.name, createBankClientDTO.sucursalId);        
    }

    public async get(id: string): Promise<BankClient> {
        return await this.bankClientRepository.get(id);
    }

    public async getAll(): Promise<BankClient[]> {
        return await this.bankClientRepository.getAll();
    }

    public async update(updateBankClientDTO: UpdateBankClientDTO): Promise<BankClient> {        
       return await this.bankClientRepository.update(updateBankClientDTO);
    }

    public async delete(deleteBankClientDTO: DeleteBankClientDTO): Promise<BankClient> {
        return await this.bankClientRepository.delete(deleteBankClientDTO.id);
    }

    public async getClientSummary(id: string, startDate: string, endDate: string): Promise<ISummary> {
        const bankClient = await this.bankClientRepository.get(id);
        const transactions = await this.bankClientTransactionsService.getTransactions(bankClient.id);
        const sucursal = await this.sucursalService.getSucursalById(bankClient.sucursalId);

        const filteredTransactions = transactions.filter(transaction => {
            return transaction.createdAt >= new Date(startDate) && transaction.createdAt <= new Date(endDate);
        })
        
        const total = this.calculateTotal(bankClient, transactions);
        const summary = {
            clientId: bankClient.id,
            clientName: bankClient.name,
            sucursal: sucursal.name,
            total,
            transactions: filteredTransactions,
        }
        return summary;

    }

    private calculateTotal(bankClient: BankClient, transactions: BankClientTransactions[]): number {
        const basePrice = bankClient.basePrice;
        const insurance = basePrice > 100 ? basePrice * 0.05 : 0;
        const services = transactions.length > 4 ? basePrice * 0.02 + (transactions.length-4) * 0.25 : 0;
        const comissions = basePrice * 0.1 ;
        const IVA  = 12;
        const total = basePrice - insurance - services + comissions + IVA;
        return total;
    }

    
}