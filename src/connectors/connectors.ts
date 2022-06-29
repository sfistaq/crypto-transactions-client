/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { ethers } from "ethers";
import { config, chainID } from "../config";

export enum ConnectorType {
  METAMASK = "METAMASK",
  WALLETCONNECT = "WALLETCONNECT",
  WALLETLINK = "WALLETLINK",
}

export const injected: InjectedConnector = new InjectedConnector({
  supportedChainIds: config.INJECTED_CONNECTOR.suportedChainIds,
});

export const localProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(config.RPC_PROVIDER.rpc_address);

export const walletConnect = new WalletConnectConnector({
  rpc: {
    [chainID]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  },
  qrcode: true,
  chainId: chainID,
});

export const walletLink = new WalletLinkConnector({
  appName: "crypto-transactions",
  url: config.RPC_PROVIDER.rpc_address,
});

export const switchConnector = (connector: ConnectorType) => {
  switch (connector) {
    case ConnectorType.METAMASK: {
      return injected as InjectedConnector;
    }
    case ConnectorType.WALLETCONNECT: {
      return walletConnect as WalletConnectConnector;
    }
    case ConnectorType.WALLETLINK: {
      return walletLink as WalletLinkConnector;
    }
    default:
      return injected as InjectedConnector;
  }
};
