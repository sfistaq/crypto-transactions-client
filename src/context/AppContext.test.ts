import { reducer, initState } from "./AppReducer";
import { ActionsTypes, LoadingType, Action } from "./AppContext";

describe("AppContext Tests", () => {
  it("should return the initial state", () => {
    expect(reducer(initState, {} as Action)).toEqual(initState);
  });

  it(`should handle ${ActionsTypes.SET_ADDRESS}`, () => {
    const action: Action = {
      type: ActionsTypes.SET_ADDRESS,
      payload: "0x0000000000000000000000000000000000000000",
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      address: "0x0000000000000000000000000000000000000000",
    });
  });

  it(`should handle ${ActionsTypes.SET_BALANCE}`, () => {
    const action: Action = {
      type: ActionsTypes.SET_BALANCE,
      payload: "100",
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      balance: "100",
    });
  });

  it(`should handle ${ActionsTypes.SET_LOADING}`, () => {
    const action: Action = {
      type: ActionsTypes.SET_LOADING,
      payload: LoadingType.FETCH_GIFS,
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      loading: LoadingType.FETCH_GIFS,
    });
  });

  it(`should handle ${ActionsTypes.SET_TRANSACTIONS}`, async () => {
    const action: Action = {
      type: ActionsTypes.SET_TRANSACTIONS,
      payload: [],
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      transactions: [],
    });
  });
});
