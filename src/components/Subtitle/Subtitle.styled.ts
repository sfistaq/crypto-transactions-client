import styled from "styled-components";
import { Typography, TypographyProps } from "@mui/material";

export const Description = styled(Typography)<TypographyProps>`
  width: fit-content;
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  margin: 30px 0 20px 0;
  letter-spacing: 1px;
`;
