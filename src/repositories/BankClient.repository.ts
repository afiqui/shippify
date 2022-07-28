import { BankClient } from "@prisma/client";
import { UpdateBankClientDTO } from "../routes/dto/BankClient.dto";
import { BaseRepository } from "./BaseRepository.repository";

export class BankClientRepository extends BaseRepository {
    constructor() {
        super();
    }
    public async create(id: string, name: string, sucursalId: string): Promise<BankClient> {
        return await this.bankClient.create({
            data: {
                id,
                name,
                sucursalId,                
            }
        });

    }

    public async get(id: string): Promise<BankClient> {
        return await this.bankClient.findFirst({
            where: {
                id
            }
        });
    }

    public async getAll(): Promise<BankClient[]> {
        return await this.bankClient.findMany();
    }

    public async update(updateDTO: UpdateBankClientDTO): Promise<BankClient> {
        return await this.bankClient.update({
            data:updateDTO,
            where: {
                id: updateDTO.id
            },
        });
    }

    public async delete(id: string): Promise<BankClient> {
        return await this.bankClient.update({
            data:{
                deletedAt: new Date()
            },
            where: {
                id
            }
        });
    }

}