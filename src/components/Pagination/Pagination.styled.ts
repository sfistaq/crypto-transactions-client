import styled from "styled-components";
import { Pagination as MUIPagination, PaginationProps } from "@mui/material";

export const Pagination = styled(MUIPagination)<PaginationProps>`
  background: ${({ theme: { palette } }) => palette.darkBlue.main};
  ${({ theme: { palette } }) => palette.background.blur};
  box-shadow: ${({ theme: { shadows } }) => shadows[10]};
  padding: 15px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
  width: fit-content;
  margin: 20px auto;
  max-width: calc(100vw - 20px);

  button {
    color: ${({ theme: { palette } }) => palette.darkBlue.contrastText};
  }

  li {
    div {
      color: ${({ theme: { palette } }) => palette.darkBlue.contrastText};
    }
  }
`;
