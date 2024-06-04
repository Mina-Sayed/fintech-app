import { Schema, model, Document } from 'mongoose';

interface ITransaction extends Document {
  amount: number;
  type: 'deposit' | 'withdrawal';
  accountId: string;
}

const transactionSchema = new Schema<ITransaction>({
  amount: { type: Number, required: true },
  type: { type: String, enum: ['deposit', 'withdrawal'], required: true },
  accountId: { type: String, required: true }
});

const Transaction = model<ITransaction>('Transaction', transactionSchema);
export default Transaction;
