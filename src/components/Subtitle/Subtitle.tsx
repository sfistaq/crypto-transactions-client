import type { TypographyProps } from "@mui/material";
import * as S from "./Subtitle.styled";

export type ISubtitleProps = {
  text: string;
} & React.HTMLAttributes<HTMLHeadingElement> &
  TypographyProps;

const Subtitle = ({ text, ...rest }: ISubtitleProps) => (
  <S.Description variant="h5" {...rest}>
    {text}
  </S.Description>
);

export default Subtitle;
