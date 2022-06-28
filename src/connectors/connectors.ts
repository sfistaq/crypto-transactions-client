import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { config } from "../config";

export enum ConnectorType {
  METAMASK = "METAMASK",
}

export const injected: InjectedConnector = new InjectedConnector({
  supportedChainIds: config.INJECTED_CONNECTOR.suportedChainIds,
});

export const localProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(config.RPC_PROVIDER.rpc_address);

export const switchConnector = (connector: ConnectorType) => {
  switch (connector) {
    case ConnectorType.METAMASK: {
      return injected as InjectedConnector;
    }
    default:
      return injected as InjectedConnector;
  }
};
