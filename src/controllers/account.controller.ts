import { Request, Response } from 'express';
import { createAccount, getAccountBalance } from '../services/account.service';

export const openAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.body.id; // assuming user ID is attached to the request
    const accountId = await createAccount(userId);
    res.status(201).json({ accountId });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const checkBalance = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    const balance = await getAccountBalance(accountId);
    res.status(200).json({ balance });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
