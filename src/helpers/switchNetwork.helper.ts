export const switchNetworkHelper = async (network: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (window as any).ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: `0x${network.toString(16)}` }],
  });
};
