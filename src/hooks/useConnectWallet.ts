/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useContext, useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import Buffer from "buffer";
import { ethers } from "ethers";
import { chainID, config } from "../config";
import { switchConnector, ConnectorType } from "../connectors";
import {
  checkChainHelper,
  switchNetworkHelper,
  translateErrorHelper,
} from "../helpers";
import { AppContext, ActionsTypes, LoadingType } from "../context";
import { customToast, ToastType } from "../components";
import { Connector } from "../@types/connector";

const useConnectWallet = () => {
  const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
  const { active, account, activate, deactivate, library, error } =
    useWeb3React();
  const { dispatch } = useContext(AppContext);

  const disconnectWallet = () => {
    deactivate();
    dispatch({ type: ActionsTypes.SET_ADDRESS, payload: "" });
    dispatch({ type: ActionsTypes.SET_BALANCE, payload: "" });
    dispatch({ type: ActionsTypes.SET_SIGNER, payload: undefined });
    dispatch({ type: ActionsTypes.SET_TRANSACTIONS, payload: [] });
    dispatch({ type: ActionsTypes.SET_LOADING, payload: null });

    localStorage.removeItem("walletconnect");

    customToast(ToastType.INFO, "Wallet is disconnected", {
      toastId: "disconnect-wallet",
      autoClose: 2000,
    });
  };

  const connectWallet = async (connectorType: ConnectorType) => {
    window.Buffer = window.Buffer || Buffer.Buffer;

    if (connectorType === ConnectorType.WALLETCONNECT) {
      localStorage.removeItem("walletconnect");
    }

    if (
      connectorType === ConnectorType.METAMASK &&
      !checkChainHelper(chainID)
    ) {
      await switchNetworkHelper(chainID);
    }

    dispatch({
      type: ActionsTypes.SET_LOADING,
      payload: LoadingType.CONNECTING,
    });
    try {
      const connector: Connector = switchConnector(connectorType);
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
      setShowConnectModal(false);
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

  useEffect(() => {
    // console.log(error, "connect wallet useEffect error");
    if (error instanceof UnsupportedChainIdError) {
      customToast(
        ToastType.ERROR,
        `Unsupported network, please connect to ${config.CONTRACT.networkName}`,
        {
          toastId: "toast-network-error",
        }
      );

      disconnectWallet();
    }
  }, [error, active]);

  return {
    connectWallet,
    disconnectWallet,
    active,
    ConnectorType,
    showConnectModal,
    setShowConnectModal,
  };
};

export default useConnectWallet;
