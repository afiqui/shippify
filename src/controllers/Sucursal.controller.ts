import { SucursalService } from '../services/Sucursal.service';
import Express from 'express';
import { CreateSucursalDTO, DeleteSucursalDTO, UpdateSucursalDTO } from '../routes/dto/Sucursal.dto';

export class SucursalController {

    private readonly sucursalService: SucursalService;
    constructor(sucursalService: SucursalService) {
        this.sucursalService = sucursalService;
    }

    public async create(req: Express.Request, res: Express.Response) {
        try {
            const createSucursalDTO: CreateSucursalDTO = req.body;            
            const sucursal = await this.sucursalService.createSucursal(createSucursalDTO);
            res.send(sucursal);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async getSucursalById(req: Express.Request, res: Express.Response) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).send('Missing id of sucursal');
            }           
            const sucursal = await this.sucursalService.getSucursalById(id);
            res.send(sucursal);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async listAllSucursals(_req: Express.Request, res: Express.Response) {
        try {                 
            const sucursalList = await this.sucursalService.listAll();
            res.send(sucursalList);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async update(req: Express.Request, res: Express.Response) {
        try {
            const updateSucursalDTO: UpdateSucursalDTO = req.body;            
            const updatedSucursal = await this.sucursalService.updateSucursal(updateSucursalDTO);
            res.send(updatedSucursal);
        } catch (error) {
            res.status(500).send(error);
        } 
    }

    public async delete(req: Express.Request, res: Express.Response) {
        try {
            const deleteSucursalDTO: DeleteSucursalDTO = req.body;            
            const deletedSucursal = await this.sucursalService.deleteSucursal(deleteSucursalDTO);
            res.send(deletedSucursal);
        } catch (error) {
            res.status(500).send(error);
        } 
    }
}