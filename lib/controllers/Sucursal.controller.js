"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalController = void 0;
class SucursalController {
    sucursalService;
    constructor(sucursalService) {
        this.sucursalService = sucursalService;
    }
    async create(req, res) {
        try {
            const createSucursalDTO = req.body;
            const sucursal = await this.sucursalService.createSucursal(createSucursalDTO);
            res.send(sucursal);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async getSucursalById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).send('Missing id of sucursal');
            }
            const sucursal = await this.sucursalService.getSucursalById(id);
            res.send(sucursal);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async listAllSucursals(_req, res) {
        try {
            const sucursalList = await this.sucursalService.listAll();
            res.send(sucursalList);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async update(req, res) {
        try {
            const updateSucursalDTO = req.body;
            const updatedSucursal = await this.sucursalService.updateSucursal(updateSucursalDTO);
            res.send(updatedSucursal);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async delete(req, res) {
        try {
            const deleteSucursalDTO = req.body;
            const deletedSucursal = await this.sucursalService.deleteSucursal(deleteSucursalDTO);
            res.send(deletedSucursal);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}
exports.SucursalController = SucursalController;
