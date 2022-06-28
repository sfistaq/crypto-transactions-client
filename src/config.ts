import type { ToastOptions } from "react-toastify";

export const chainID = 4;

export const config = {
  RPC_PROVIDER: {
    rpc_address: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  },
  INJECTED_CONNECTOR: {
    suportedChainIds: [chainID],
  },
  CONTRACT: {
    address: "0x0E55E06854f4B4905d8D17eA12df169b753552B2",
    symbol: "ETH",
    etherscanUrl: "https://rinkeby.etherscan.io/",
    networkName: "Ethereum Rinkeby Testnet",
    minimumTransferValue: 0.001,
  },
  GIPHY: {
    apiKey: process.env.REACT_APP_GIPHY_API_KEY,
    giphyUrl: "https://api.giphy.com/v1/gifs",
    searchLimit: 1,
  },
  TOAST_DEFAULT_CONFIG: {
    pauseOnFocusLoss: false,
    autoClose: 5000,
  } as ToastOptions,
};
