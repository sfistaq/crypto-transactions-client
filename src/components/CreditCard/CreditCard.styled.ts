import styled from "styled-components";
import {
  Link as MUILink,
  LinkProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
  background-image: ${({ theme: { palette } }) =>
    palette.background.creditCard};
  background-color: ${({ theme: { palette } }) => palette.purple.main};
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  ${({ theme: { palette } }) => palette.background.blur};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 0.6;
  width: 100%;
`;

export const Icon = styled.div`
  font-size: 28px;
  padding: 8px;
`;

export const Link = styled(MUILink)<LinkProps>`
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  align-self: start;
  text-decoration: none;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.4;
  row-gap: 5px;
  padding: 0 8px;
`;

export const Text = styled(Typography)<TypographyProps>`
  font-size: ${({ theme: { typography } }) => typography.subtitle2.fontSize};
  letter-spacing: 0.5px;
`;
