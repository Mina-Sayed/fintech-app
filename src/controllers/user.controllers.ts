// user.controller.ts

import { Request, Response, NextFunction } from 'express';
import HttpError from '../middlewares/error.middleware';
import { loginUser, registerUser } from '../services/user.service';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;
        const userId = await registerUser(username, email, password);
        res.status(201).json({ userId });
    } catch (error) {
        next(new HttpError((error as Error).message, 500));
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        next(new HttpError((error as Error).message, 401));
    }
};
