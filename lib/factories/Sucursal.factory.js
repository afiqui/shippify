"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalFactory = void 0;
const Sucursal_controller_1 = require("../controllers/Sucursal.controller");
const Sucursal_repository_1 = require("../repositories/Sucursal.repository");
const Sucursal_service_1 = require("../services/Sucursal.service");
class SucursalFactory {
    static createSucursalController() {
        const sucursalRepository = new Sucursal_repository_1.SucursalRepository();
        const sucursalService = new Sucursal_service_1.SucursalService(sucursalRepository);
        return new Sucursal_controller_1.SucursalController(sucursalService);
    }
}
exports.SucursalFactory = SucursalFactory;
