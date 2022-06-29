import styled from "styled-components";
import { Typography, TypographyProps } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  button {
    width: 70%;
  }

  svg {
    position: absolute;
    top: 6px;
    left: 12px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

export const Title = styled(Typography)<TypographyProps>`
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  letter-spacing: 0.5px;
  margin: 15px 0;
  /* padding: 0 20px; */
  /* font-size: ${({ theme: { typography } }) =>
    typography.subtitle2.fontSize}; */
`;

// TODO STYLES FOR MOBILE