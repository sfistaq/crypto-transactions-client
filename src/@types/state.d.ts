declare type State = {
  address: string;
  balance: string;
  error: string;
  loading: LoadingType | null;
  signer: Signer | undefined;
  transactions: TransactionType[] | [];
};
