import { ethers } from "ethers";

export const getLibrary = (
  provider:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
) => new ethers.providers.Web3Provider(provider);
