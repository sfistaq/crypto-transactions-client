import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

export const PrimaryButton = styled(Button)<ButtonProps>`
  width: 250px;
  padding: 10px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
  position: relative;

  svg {
    width: 32px;
    height: 32px;
  }
`;
