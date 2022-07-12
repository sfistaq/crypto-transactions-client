export const translateErrorHelper = (error: string) => {
  switch (error) {
    case `MetaMask Tx Signature: User denied transaction signature.`:
      return "User rejected the transaction.";
    default:
      return error;
  }
};
