declare type TransactionType = {
  amount: string;
  from: string;
  keyword: string;
  message: string;
  receiver: string;
  timestamp: string;
  transactionFee: string;
};

declare type TransactionResponse = {
  0: string;
  1: string;
  2: BigNumber;
  3: BigNumber;
  4: string;
  5: string;
  6: BigNumber;
  amount: BigNumber;
  from: string;
  keyword: string;
  message: string;
  receiver: string;
  timestamp: BigNumber;
  transactionFee: BigNumber;
};
