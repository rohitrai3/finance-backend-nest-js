import { Transaction } from 'src/generated/prisma/client';

export type PingResponse = {
  status: string;
};

export type GetAllTransactionsResponse = {
  status: string;
  transactions: Transaction[];
};

export type DeleteTransactionResponse = {
  status: string;
  count: number;
};
