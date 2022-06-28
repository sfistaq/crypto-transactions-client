/* eslint-disable @typescript-eslint/no-empty-function */
import type { Signer } from "ethers";
import { createContext, useReducer, useMemo } from "react";
import { reducer, initState } from "./AppReducer";

export enum ActionsTypes {
  SET_ADDRESS = "SET_ADDRESS",
  SET_LOADING = "SET_LOADING",
  SET_BALANCE = "SET_BALANCE",
  SET_SIGNER = "SET_SIGNER",
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
}

export enum LoadingType {
  CONNECTING = "CONNECTING",
  FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS",
  TRANSACTION_PENDING = "TRANSACTION_PENDING",
  TRANSACTION_SUCCESS = "TRANSACTION_SUCCESS",
  FETCH_GIFS = "FETCH_GIFS",
}

export type Action =
  | { type: ActionsTypes.SET_ADDRESS; payload: string }
  | { type: ActionsTypes.SET_BALANCE; payload: string }
  | { type: ActionsTypes.SET_LOADING; payload: LoadingType | null }
  | { type: ActionsTypes.SET_SIGNER; payload: Signer | undefined }
  | { type: ActionsTypes.SET_TRANSACTIONS; payload: TransactionType[] };

export type Dispatch = (action: Action) => void;

export type IContextType = {
  state: State;
  dispatch: Dispatch;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatchFunc = (action: Action) => {};

export const AppContext = createContext<IContextType>({
  state: initState,
  dispatch: dispatchFunc,
});

type ContextProps = {
  children: React.ReactNode;
};

const Context = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Context;
