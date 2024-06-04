import { Router } from 'express';
import { openAccount, checkBalance } from '../controllers/account.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.post('/open', authMiddleware, openAccount);
router.get('/balance/:accountId', authMiddleware, checkBalance);

export default router;
