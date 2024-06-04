import { Schema, model, Document } from 'mongoose';

interface IAccount extends Document {
  balance: number;
  userId: string;
}

const accountSchema = new Schema<IAccount>({
  balance: { type: Number, default: 0 },
  userId: { type: String, required: true }
});

const Account = model<IAccount>('Account', accountSchema);
export default Account;
