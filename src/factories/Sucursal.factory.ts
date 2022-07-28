import { SucursalController } from "../controllers/Sucursal.controller";
import { SucursalRepository } from "../repositories/Sucursal.repository";
import { SucursalService } from "../services/Sucursal.service";

export class SucursalFactory{
    static createSucursalController(){
        const sucursalRepository = new SucursalRepository();
        const sucursalService = new SucursalService(sucursalRepository);
        return new SucursalController(sucursalService);
    }
}