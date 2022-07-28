import { BankClient } from '@prisma/client';
import { BankClientRepository } from '../repositories/BankClient.repository';
export declare class BankClientService {
    private readonly bankClientRepository;
    constructor(bankClientRepository: BankClientRepository);
    createUser(name: string, sucursalId: string): Promise<BankClient>;
    updateUser(userId: string, name: string, sucursal: string): Promise<BankClient>;
}
