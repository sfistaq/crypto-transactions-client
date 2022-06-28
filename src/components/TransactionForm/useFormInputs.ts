import { useContext } from "react";
import { ethers } from "ethers";
import * as yup from "yup";
import { config } from "../../config";
import { AppContext } from "../../context";

const useFormInputs = () => {
  const {
    state: { address },
  } = useContext(AppContext);

  const InputFields: FormDataType = {
    ADDRESS_TO: "ADDRESS_TO",
    AMOUNT_ETH: "AMOUNT_ETH",
    MESSAGE: "MESSAGE",
    KEYWORD: "KEYWORD",
  };

  // eslint-disable-next-line consistent-return
  const placeholderFormat = (name: string) => {
    switch (name) {
      case InputFields.ADDRESS_TO:
        return "Recipient Address";
      case InputFields.AMOUNT_ETH:
        return "Amount ETH";
      case InputFields.MESSAGE:
        return "Message";
      case InputFields.KEYWORD:
        return "GIF Keyword";

      default:
        break;
    }
  };

  const formValidationSchema = yup.object().shape({
    [InputFields.ADDRESS_TO]: yup
      .string()
      .required("Recipient address is required")
      .test({
        message: "Provided address is invalid",
        test: (value) => ethers.utils.isAddress(value as string),
      })
      .test({
        message: "You cannot transfer to yourself",
        test: (value) =>
          ethers.utils.isAddress(value as string) &&
          (value as string).toLowerCase() !== address?.toLowerCase(),
      }),
    [InputFields.AMOUNT_ETH]: yup
      .number()
      .typeError("Amount is required")
      .required()
      .positive("Value must be positive number")
      .test({
        message: `Minimum transfer value is ${config.CONTRACT.minimumTransferValue} ETH`,
        test: (value) =>
          (value as number) >= config.CONTRACT.minimumTransferValue,
      }),
    [InputFields.MESSAGE]: yup
      .string()
      .required("Message is required")
      .test({
        message: "Message must be at least 3 characters",
        test: (value) => (value as string).length >= 3,
      }),
    [InputFields.KEYWORD]: yup
      .string()
      .required("Gif keyword is required")
      .test({
        message: "Gif keyword must be at least 3 characters",
        test: (value) => (value as string).length >= 3,
      }),
  });
  return { InputFields, formValidationSchema, placeholderFormat };
};

export default useFormInputs;
