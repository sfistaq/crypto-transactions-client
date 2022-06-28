import styled from "styled-components";
import { Typography, TypographyProps } from "@mui/material";
import { device } from "../../styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-top: 120px;
  flex-direction: column;
  row-gap: 30px;

  @media ${device.up.tablet} {
    flex-direction: row;
    margin-top: 140px;
    row-gap: 0;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  flex: 0.4;
  row-gap: 70px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.6;
  padding: 0 20px;
  width: 100%;
  max-width: 600px;
`;

export const Text = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  letter-spacing: 1px;
  text-align: center;
`;
