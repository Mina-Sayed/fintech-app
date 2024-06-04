import Account from '../models/account.model';
import Transaction from '../models/transaction.model';

export const deposit = async (accountId: string, amount: number) => {
  const account = await Account.findById(accountId);
  if (!account) throw new Error('Account not found');

  account.balance += amount;
  await account.save();

  const transaction = new Transaction({ amount, type: 'deposit', accountId });
  await transaction.save();
  return transaction._id;
};

export const withdraw = async (accountId: string, amount: number) => {
  const account = await Account.findById(accountId);
  if (!account) throw new Error('Account not found');
  if (account.balance < amount) throw new Error('Insufficient funds');

  account.balance -= amount;
  await account.save();

  const transaction = new Transaction({ amount, type: 'withdrawal', accountId });
  await transaction.save();
  return transaction._id;
};
