import type { ButtonGroupProps } from "@mui/material";
import * as S from "./ToggleView.styled";

type IToggleView<T> = {
  buttons: T[];
  toggleView: T;
  setToggleView: (value: T) => void;
} & React.HTMLAttributes<HTMLDivElement> &
  ButtonGroupProps;

const ToggleView = <T,>({
  buttons,
  toggleView,
  setToggleView,
  ...rest
}: IToggleView<T>) => (
  <S.ToggleWrapper
    {...rest}
    color="primary"
    data-testid="toggle-view-container"
  >
    {buttons.map((item: T) => (
      <S.ToggleButton
        key={`toggle-button-${item}`}
        variant={item === toggleView ? "contained" : "outlined"}
        onClick={() => setToggleView(item)}
      >
        {`${item}`}
      </S.ToggleButton>
    ))}
  </S.ToggleWrapper>
);

export default ToggleView;
