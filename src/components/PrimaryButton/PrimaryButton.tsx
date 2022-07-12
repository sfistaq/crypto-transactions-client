import type { ButtonProps } from "@mui/material";
import * as S from "./PrimaryButton.styled";

export type IPrimaryButtonProps = {
  text: string;
  handleClick: () => void;
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement> &
  ButtonProps;

const PrimaryButton = ({
  text,
  handleClick,
  icon,
  ...rest
}: IPrimaryButtonProps) => (
  <S.PrimaryButton
    {...rest}
    onClick={handleClick}
    variant="contained"
    endIcon={icon}
  >
    {text}
  </S.PrimaryButton>
);

export default PrimaryButton;
