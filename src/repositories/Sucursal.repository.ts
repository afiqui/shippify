import { Sucursal } from "@prisma/client";
import { CreateSucursalDTO, DeleteSucursalDTO, UpdateSucursalDTO } from "../routes/dto/Sucursal.dto";
import { BaseRepository } from "./BaseRepository.repository";

export class SucursalRepository extends BaseRepository {
    constructor() {
        super();
    }
    public async createSucursal(id: string, createSucursalDTO: CreateSucursalDTO): Promise<Sucursal> {
        return await this.sucursal.create({
            data: {
                id, 
                ...createSucursalDTO,
            }
        });

    }

    public async getSucursalById(id: string): Promise<Sucursal> {
        return await this.sucursal.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });
    }

    public async updateSucursal(updateSucursalDTO: UpdateSucursalDTO): Promise<Sucursal> {
        return await this.sucursal.update({
            data:updateSucursalDTO,
            where: {
                id: updateSucursalDTO.id
            },
        });
    }

    public async deleteSucursal(deleteSucursalDTO: DeleteSucursalDTO): Promise<Sucursal> {
        return await this.sucursal.update({
            data:deleteSucursalDTO,
            where: {
                id: deleteSucursalDTO.id
            },
        });
    }

    public async listAll(): Promise<Sucursal[]> {
        return await this.sucursal.findMany({
            where: {
                deletedAt: null
            }
        });
    }
}