import { Action, ActionsTypes } from "./AppContext";

export const initState: State = {
  address: "",
  balance: "",
  error: "",
  loading: null,
  signer: undefined,
  transactions: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionsTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ActionsTypes.SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case ActionsTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionsTypes.SET_SIGNER:
      return {
        ...state,
        signer: action.payload,
      };
    case ActionsTypes.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};
