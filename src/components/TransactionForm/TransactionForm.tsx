import { useContext, useEffect } from "react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiSend } from "react-icons/fi";
import { AppContext, LoadingType, ActionsTypes } from "../../context";
import { useConnectWallet, useTransactions } from "../../hooks";
import { translateErrorHelper } from "../../helpers";
import { customToast, customToastWithLink, ToastType } from "..";
import { config } from "../../config";
import useFormInputs from "./useFormInputs";
import * as S from "./TransactionForm.styled";

const TransactionForm = () => {
  const { active } = useConnectWallet();
  const { createTransaction, getAllTransactions } = useTransactions();
  const { InputFields, formValidationSchema, placeholderFormat } =
    useFormInputs();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: Object.assign(
      {},
      ...Object.values(InputFields).map((item) => ({ [item]: "" }))
    ),
  });
  const {
    dispatch,
    state: { loading },
  } = useContext(AppContext);
  const { etherscanUrl } = config.CONTRACT;

  const submitForm = async (data: FormDataType) => {
    const { ADDRESS_TO, AMOUNT_ETH, KEYWORD, MESSAGE } = data;

    try {
      dispatch({
        type: ActionsTypes.SET_LOADING,
        payload: LoadingType.TRANSACTION_PENDING,
      });
      const tx = await createTransaction(
        ADDRESS_TO,
        ethers.utils.parseEther(AMOUNT_ETH.toString()),
        MESSAGE,
        KEYWORD
      );

      const status = await tx.wait();

      if (status.confirmations > 0) {
        customToastWithLink(
          ToastType.INFO,
          "Transaction is confirmed",
          `${etherscanUrl}tx/${status.transactionHash}`,
          "Check details on Etherscan",
          {
            toastId: "transaction-form-confirm",
            autoClose: 6000,
          }
        );
        reset();
        getAllTransactions();
      }
    } catch (err) {
      customToast(
        ToastType.ERROR,
        translateErrorHelper((err as Error).message),
        {
          toastId: "transaction-form-error",
        }
      );
    }
    dispatch({ type: ActionsTypes.SET_LOADING, payload: null });
  };

  useEffect(() => {
    if (!active) {
      reset();
    }
  }, [active]);

  return (
    <S.FormContainer
      data-testid="transaction-form-container"
      onSubmit={handleSubmit(submitForm)}
      noValidate
    >
      {Object.values(InputFields).map((item: string) => (
        <S.Input
          data-testid="transaction-form-input"
          key={`input-${item}`}
          label={placeholderFormat(item)}
          size="small"
          type={item === InputFields.AMOUNT_ETH ? "number" : "text"}
          helperText={errors?.[item]?.message as unknown as string}
          disabled={loading === LoadingType.TRANSACTION_PENDING}
          {...register(item)}
          variant="outlined"
        />
      ))}

      <S.BottomWrapper>
        {loading === LoadingType.TRANSACTION_PENDING ? (
          <S.LoaderWrapper>
            <S.Loader />
            <S.LoaderText variant="caption">
              Transaction in progress
            </S.LoaderText>
            <S.LoaderText variant="caption">Please wait...</S.LoaderText>
          </S.LoaderWrapper>
        ) : (
          <S.SubmitButton
            data-testid="transaction-form-submit-button"
            type="submit"
            size="large"
            variant="contained"
            disabled={!active}
            endIcon={<FiSend />}
          >
            Submit
          </S.SubmitButton>
        )}
      </S.BottomWrapper>
    </S.FormContainer>
  );
};

export default TransactionForm;
