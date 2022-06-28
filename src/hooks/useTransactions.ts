/* eslint-disable consistent-return */
import { useContext } from "react";
import { ethers, Contract, Signer, BigNumber } from "ethers";
import { AppContext, ActionsTypes, LoadingType } from "../context";
import { transactionsAbi } from "../abi";
import { localProvider } from "../connectors";
import { config } from "../config";
import { translateErrorHelper } from "../helpers";
import { customToast, ToastType } from "../components";

const useTransactions = () => {
  const {
    dispatch,
    state: { signer },
  } = useContext(AppContext);

  const transactionContract = (signed?: boolean): Contract => {
    const contract = new ethers.Contract(
      config.CONTRACT.address as string,
      transactionsAbi,
      signed ? (signer as Signer) : localProvider
    );
    return contract;
  };

  const createTransaction = async (
    receiver: string,
    amount: BigNumber,
    message: string,
    keyword: string
  ) => {
    const tx = await transactionContract(true)
      .connect(signer as Signer)
      .addTransaction(receiver, amount, message, keyword, { value: amount });
    return tx;
  };

  const getAllTransactions = async () => {
    dispatch({
      type: ActionsTypes.SET_LOADING,
      payload: LoadingType.FETCH_TRANSACTIONS,
    });

    try {
      const tx = await transactionContract().getAllTransactions();

      const transactionsArray: TransactionType[] = [];

      tx.forEach(
        ({
          from,
          receiver,
          keyword,
          message,
          timestamp,
          amount,
          transactionFee,
        }: TransactionResponse) => {
          const obj = {
            from,
            receiver,
            keyword,
            message,
            timestamp: timestamp.toString(),
            amount: ethers.utils.formatEther(amount),
            transactionFee: ethers.utils.formatEther(transactionFee),
          };
          transactionsArray.push(obj);
        }
      );

      if (transactionsArray) {
        dispatch({
          type: ActionsTypes.SET_TRANSACTIONS,
          payload: transactionsArray,
        });
      }
    } catch (err) {
      customToast(
        ToastType.ERROR,
        translateErrorHelper((err as Error).message),
        {
          toastId: "use-transaction-error",
        }
      );
    }
    dispatch({
      type: ActionsTypes.SET_LOADING,
      payload: null,
    });
  };

  return { createTransaction, getAllTransactions };
};

export default useTransactions;
