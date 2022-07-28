"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalRepository = void 0;
const BaseRepository_repository_1 = require("./BaseRepository.repository");
class SucursalRepository extends BaseRepository_repository_1.BaseRepository {
    constructor() {
        super();
    }
    async createSucursal(id, createSucursalDTO) {
        return await this.sucursal.create({
            data: {
                id,
                ...createSucursalDTO,
            }
        });
    }
    async getSucursalById(id) {
        return await this.sucursal.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });
    }
    async updateSucursal(updateSucursalDTO) {
        return await this.sucursal.update({
            data: updateSucursalDTO,
            where: {
                id: updateSucursalDTO.id
            },
        });
    }
    async deleteSucursal(deleteSucursalDTO) {
        return await this.sucursal.update({
            data: deleteSucursalDTO,
            where: {
                id: deleteSucursalDTO.id
            },
        });
    }
    async listAll() {
        return await this.sucursal.findMany({
            where: {
                deletedAt: null
            }
        });
    }
}
exports.SucursalRepository = SucursalRepository;
