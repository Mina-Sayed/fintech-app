import { Request, Response } from 'express';
import { deposit, withdraw } from '../services/transaction.service';

/**
 * Deposit funds into an account.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to the transaction ID.
 */
export const depositFunds = async (req: Request, res: Response) => {
  try {
    const { accountId, amount } = req.body;
    const transactionId = await deposit(accountId, amount);
    res.status(201).json({ transactionId });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const withdrawFunds = async (req: Request, res: Response) => {
  try {
    const { accountId, amount } = req.body;
    const transactionId = await withdraw(accountId, amount);
    res.status(201).json({ transactionId });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};
