import { customToastWithLink, ToastType } from "../components";

export const detectMetamaskHelper = (): boolean => {
  const isMetaMask =
    typeof window !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (window as any).ethereum !== "undefined";

  if (!isMetaMask) {
    customToastWithLink(
      ToastType.WARNING,
      "No MetaMask extension detected",
      "https://metamask.io/download/",
      "Install MetaMask extension",
      {
        toastId: "install-metamask-error",
      }
    );
  }
  return isMetaMask;
};
