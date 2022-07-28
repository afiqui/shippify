import { Sucursal } from '@prisma/client';
import { uuid } from 'uuidv4';
import { SucursalRepository } from '../repositories/Sucursal.repository';
import { CreateSucursalDTO, DeleteSucursalDTO, UpdateSucursalDTO } from '../routes/dto/Sucursal.dto';

export class SucursalService {
    private readonly SucursalRepository: SucursalRepository;
    constructor(SucursalRepository: SucursalRepository) {
        this.SucursalRepository = SucursalRepository;
    }

    public async createSucursal(createSucursalDTO: CreateSucursalDTO): Promise<Sucursal> {
        const sucursalId = uuid();
        return await this.SucursalRepository.createSucursal(sucursalId, createSucursalDTO);        
    }

    public async getSucursalById(id: string): Promise<Sucursal> {
        return await this.SucursalRepository.getSucursalById(id);
    }

    public async listAll(): Promise<Sucursal[]> {
        return await this.SucursalRepository.listAll();
    }

    public async updateSucursal(updateSucursalDTO: UpdateSucursalDTO): Promise<Sucursal> {        
       return await this.SucursalRepository.updateSucursal(updateSucursalDTO);
    }

    public async deleteSucursal(deleteSucursalDTO: DeleteSucursalDTO): Promise<Sucursal> {        
        return await this.SucursalRepository.deleteSucursal(deleteSucursalDTO);
     }
}