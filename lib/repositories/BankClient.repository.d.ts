import { BankClient } from "@prisma/client";
import { BaseRepository } from "./BaseRepository.repository";
export declare class BankClientRepository extends BaseRepository {
    constructor();
    createUser(id: string, name: string, sucursalId: string): Promise<BankClient>;
    updateUser(id: string, name: string, sucursalId: string): Promise<BankClient>;
}
