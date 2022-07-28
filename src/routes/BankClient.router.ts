import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator'
import { BankClientFactory } from '../factories/BankClient.factory';
import { CreateBankClientDTO, DeleteBankClientDTO, UpdateBankClientDTO } from './dto/BankClient.dto';
 
const router = Router();
const clientBankController = BankClientFactory.createBankClientController();

router.post(
    '/',
    makeValidateBody(CreateBankClientDTO), 
    (req, res) => {
        clientBankController.create(req, res);
    }
)

router.get(
    '/summary',
    (req, res) => {
        clientBankController.getClientSummary(req, res);
    }
)

router.get(
    '/:id',
    (req, res) => {
        clientBankController.get(req, res);
    }
)

router.get(
    '/',
    (req, res) => {
        clientBankController.getAll(req, res);
    }
)

router.patch(
    '/',
    makeValidateBody(UpdateBankClientDTO), 
    (req, res) => {
        clientBankController.create(req, res);
    }
)

router.delete(
    '/',
    makeValidateBody(DeleteBankClientDTO), 
    (req, res) => {
        clientBankController.delete(req, res);
    }
)


export default router;