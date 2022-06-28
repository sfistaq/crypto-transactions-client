import styled from "styled-components";
import { Box, BoxProps } from "@mui/material";

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: ${({ theme: { palette } }) => palette.background.layout};
  background-color: ${({ theme: { palette } }) => palette.dark.main};
  overflow: hidden;

  &&& {
    .Toastify__toast {
      background: ${({ theme: { palette } }) => palette.background.toast};
      box-shadow: ${({ theme: { shadows } }) => shadows[10]};
      ${({ theme: { palette } }) => palette.background.blur};
      border-radius: ${({ theme }) => theme.shape.borderRadius}px;
      color: ${({ theme: { palette } }) => palette.primary.contrastText};
      z-index: 100;

      a {
        color: ${({ theme: { palette } }) => palette.primary.main};
        text-decoration: none;

        &:hover {
          color: ${({ theme: { palette } }) => palette.primary.dark};
          cursor: pointer;
        }
      }
    }

    button[aria-label="close"] {
      color: ${({ theme: { palette } }) => palette.primary.contrastText};
    }
  }
`;
