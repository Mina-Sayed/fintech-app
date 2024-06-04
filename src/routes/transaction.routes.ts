import { Router } from 'express';
import { depositFunds, withdrawFunds } from '../controllers/transaction.controller';
import authMiddleware from '../middlewares/auth.middleware';

/**
 * Express router for handling transaction routes.
 */
const router = Router();

/**
 * Route for depositing funds.
 * @name POST /deposit
 * @function
 * @memberof transactionRoutes
 * @inner
 * @param {string} path - Express path
 * @param {Function[]} middleware - Express middleware
 * @param {Function} controller - Express controller
 */
router.post('/deposit', authMiddleware, depositFunds);

/**
 * Route for withdrawing funds.
 * @name POST /withdraw
 * @function
 * @memberof transactionRoutes
 * @inner
 * @param {string} path - Express path
 * @param {Function[]} middleware - Express middleware
 * @param {Function} controller - Express controller
 */
router.post('/withdraw', authMiddleware, withdrawFunds);

export default router;
