import { Router } from 'express';
import bankClientRouter from './BankClient.router';
import bankClientTransactionsRouter from './BankClientTransactions.router'; 
import sucursalRouter from './Sucursal.router';

const router = Router();
router.use('/bank-client', bankClientRouter);
router.use('/transactions', bankClientTransactionsRouter);
router.use('/sucursal', sucursalRouter);

export default router;