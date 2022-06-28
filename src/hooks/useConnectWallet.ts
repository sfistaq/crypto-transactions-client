/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { chainID, config } from "../config";
import { switchConnector, ConnectorType } from "../connectors";
import {
  checkChainHelper,
  switchNetworkHelper,
  detectMetamaskHelper,
  translateErrorHelper,
} from "../helpers";
import { AppContext, ActionsTypes, LoadingType } from "../context";
import { customToast, ToastType } from "../components";

const useConnectWallet = () => {
  const {
    active,
    account,
    activate,
    deactivate,
    library,
    chainId: currentConnectedChainId,
  } = useWeb3React();
  const { dispatch } = useContext(AppContext);

  const disconnectWallet = () => {
    deactivate();
    dispatch({ type: ActionsTypes.SET_ADDRESS, payload: "" });
    dispatch({ type: ActionsTypes.SET_BALANCE, payload: "" });
    dispatch({ type: ActionsTypes.SET_SIGNER, payload: undefined });
    dispatch({ type: ActionsTypes.SET_TRANSACTIONS, payload: [] });
    dispatch({ type: ActionsTypes.SET_LOADING, payload: null });

    customToast(ToastType.INFO, "Wallet is disconnected", {
      toastId: "disconnect-wallet",
      autoClose: 2000,
    });
  };

  const connectWallet = async (connectorType: ConnectorType) => {
    if (!detectMetamaskHelper()) return;

    if (!checkChainHelper(chainID)) {
      await switchNetworkHelper(chainID);
    }

    dispatch({
      type: ActionsTypes.SET_LOADING,
      payload: LoadingType.CONNECTING,
    });
    try {
      const connector: InjectedConnector = switchConnector(connectorType);
      await activate(connector);
    } catch (err) {
      customToast(
        ToastType.ERROR,
        translateErrorHelper((err as Error).message),
        {
          toastId: "connect-wallet-error",
        }
      );
    }
    dispatch({ type: ActionsTypes.SET_LOADING, payload: null });
  };

  useEffect(() => {
    if (active && library && account) {
      customToast(
        ToastType.SUCCESS,
        `Connected wallet ${account.slice(0, 25)}...`,
        {
          toastId: account,
          autoClose: 2000,
        }
      );
      (async () => {
        dispatch({
          type: ActionsTypes.SET_SIGNER,
          payload: await library.getSigner(),
        });

        const balance = await library.getBalance(account);

        dispatch({
          type: ActionsTypes.SET_BALANCE,
          payload: ethers.utils.formatEther(balance),
        });
        dispatch({ type: ActionsTypes.SET_ADDRESS, payload: account });
      })();
    }
  }, [account, library, active]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const { ethereum } = window as any;
    if (ethereum) ethereum.autoRefreshOnNetworkChange = true;
    if (ethereum && ethereum.on) {
      const handleChainChanged = async (networkId: string) => {
        const changedChainID = parseInt(networkId, 16);

        if (active && chainID !== changedChainID) {
          customToast(
            ToastType.ERROR,
            `Unsupported network, please connect to ${config.CONTRACT.networkName}`,
            {
              toastId: "toast-network-error",
            }
          );

          disconnectWallet();
        }
      };

      ethereum.on("chainChanged", handleChainChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, [currentConnectedChainId]);

  return { connectWallet, disconnectWallet, active, ConnectorType };
};

export default useConnectWallet;
