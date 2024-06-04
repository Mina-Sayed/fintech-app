import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import accountRoutes from './routes/account.routes';
import transactionRoutes from './routes/transaction.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
