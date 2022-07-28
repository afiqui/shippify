import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator'
import { BankClientTransactionsFactory } from '../factories/BankClientTransactions.factory';
import { CreateTransactionsDTO } from './dto/BankClientTransactions.dto';
 
const router = Router();
const clientBankTransactionsController = BankClientTransactionsFactory.createBankClientTransactionsController();

router.post(
    '/',
    makeValidateBody(CreateTransactionsDTO), 
    (req, res) => {
        clientBankTransactionsController.createTransaction(req, res);
    }
)

router.get(
    '/',
    (req, res) => {
        clientBankTransactionsController.getTransactions(req, res);
    }
)


export default router;