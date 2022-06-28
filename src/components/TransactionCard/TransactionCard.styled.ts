import styled, { css } from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  CardMediaProps,
  Typography,
  TypographyProps,
  Link,
  Chip,
  ChipProps,
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";

export const TransactionCard = styled(Card)`
  display: flex;
  width: 300px;
  height: 400px;
  background: ${({ theme: { palette } }) => palette.background.transactionCard};
  ${({ theme: { palette } }) => palette.background.blur}
  box-shadow: ${({ theme: { shadows } }) => shadows[10]};
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 5px;
`;

export const CardText = styled(Typography)<TypographyProps>`
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  width: 275px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:nth-child(3) {
    margin-bottom: 5px;
  }
`;

export const Time = styled(Chip)<ChipProps>`
  align-self: center;
  padding: 10px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
`;

interface ICardMediaProps extends CardMediaProps {
  component: string;
}

const Wrapper = css`
  height: 200px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid ${({ theme: { palette } }) => palette.primary.contrastText};
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
`;

export const CardImage = styled(CardMedia)<ICardMediaProps>`
  ${Wrapper}
`;

export const LoaderWrapper = styled.div`
  ${Wrapper}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled(CircularProgress)<CircularProgressProps>``;
