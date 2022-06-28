import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

export const ConnectButton = styled(Button)<ButtonProps>`
  width: 250px;
  padding: 10px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
`;
