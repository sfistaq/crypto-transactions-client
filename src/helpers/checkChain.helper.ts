export const checkChainHelper = (networkId: number): boolean => {
  const currentConnectedChainId = parseInt(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ethereum.chainId,
    16
  );
  return currentConnectedChainId === networkId;
};
