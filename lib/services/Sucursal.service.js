"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalService = void 0;
const uuidv4_1 = require("uuidv4");
class SucursalService {
    SucursalRepository;
    constructor(SucursalRepository) {
        this.SucursalRepository = SucursalRepository;
    }
    async createSucursal(createSucursalDTO) {
        const sucursalId = (0, uuidv4_1.uuid)();
        return await this.SucursalRepository.createSucursal(sucursalId, createSucursalDTO);
    }
    async getSucursalById(id) {
        return await this.SucursalRepository.getSucursalById(id);
    }
    async listAll() {
        return await this.SucursalRepository.listAll();
    }
    async updateSucursal(updateSucursalDTO) {
        return await this.SucursalRepository.updateSucursal(updateSucursalDTO);
    }
    async deleteSucursal(deleteSucursalDTO) {
        return await this.SucursalRepository.deleteSucursal(deleteSucursalDTO);
    }
}
exports.SucursalService = SucursalService;
