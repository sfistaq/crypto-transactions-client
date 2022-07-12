import { toast, ToastOptions } from "react-toastify";
import { config } from "../../config";

const { TOAST_DEFAULT_CONFIG } = config;

export enum ToastType {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
}

export const customToast = (
  type: ToastType,
  message: string | React.ReactNode,
  options?: ToastOptions
) =>
  toast[type](message, {
    ...TOAST_DEFAULT_CONFIG,
    ...options,
  });

export const customToastWithLink = (
  type: ToastType,
  message: string,
  link: string,
  linkText: string,
  options?: ToastOptions
) => {
  toast[type](
    <>
      <p style={{ marginBottom: "5px" }}>{message}</p>
      <a href={link} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </>,
    {
      ...TOAST_DEFAULT_CONFIG,
      ...options,
    }
  );
};
