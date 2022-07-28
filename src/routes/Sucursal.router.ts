import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator'
import { SucursalFactory } from '../factories/Sucursal.factory';
import { CreateSucursalDTO, DeleteSucursalDTO, UpdateSucursalDTO } from './dto/Sucursal.dto';
 
const router = Router();
const sucursalController = SucursalFactory.createSucursalController();

router.post(
    '/',
    makeValidateBody(CreateSucursalDTO), 
    (req, res) => {
        sucursalController.create(req, res);
    }
)

router.patch(
    '/',
    makeValidateBody(UpdateSucursalDTO), 
    (req, res) => {
        sucursalController.update(req, res);
    }
)

router.delete(
    '/',
    makeValidateBody(DeleteSucursalDTO), 
    (req, res) => {
        sucursalController.delete(req, res);
    }
)

router.get(
    '/',
    (req, res) => {
        sucursalController.listAllSucursals(req, res);
    }
)

router.get(
    '/:id',
    (req, res) => {
        sucursalController.getSucursalById(req, res);
    }
)


export default router;