import Account from '../models/account.model';

export const createAccount = async (userId: string) => {
  const account = new Account({ userId });
  await account.save();
  return account._id;
};

export const getAccountBalance = async (accountId: string) => {
  const account = await Account.findById(accountId);
  if (!account) throw new Error('Account not found');
  return account.balance;
};
