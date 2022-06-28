export const translateErrorHelper = (error: string) => {
  // console.log(error, "translateErrorHelper");
  switch (error) {
    case `MetaMask Tx Signature: User denied transaction signature.`:
      return "User rejected the transaction.";
    default:
      return error;
  }
};
