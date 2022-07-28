"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_class_validator_1 = require("express-class-validator");
const Sucursal_factory_1 = require("../factories/Sucursal.factory");
const Sucursal_dto_1 = require("./dto/Sucursal.dto");
const router = (0, express_1.Router)();
const sucursalController = Sucursal_factory_1.SucursalFactory.createSucursalController();
router.post('/', (0, express_class_validator_1.makeValidateBody)(Sucursal_dto_1.CreateSucursalDTO), (req, res) => {
    sucursalController.create(req, res);
});
router.patch('/', (0, express_class_validator_1.makeValidateBody)(Sucursal_dto_1.UpdateSucursalDTO), (req, res) => {
    sucursalController.update(req, res);
});
router.delete('/', (0, express_class_validator_1.makeValidateBody)(Sucursal_dto_1.DeleteSucursalDTO), (req, res) => {
    sucursalController.delete(req, res);
});
router.get('/', (req, res) => {
    sucursalController.listAllSucursals(req, res);
});
router.get('/:id', (req, res) => {
    sucursalController.getSucursalById(req, res);
});
exports.default = router;
