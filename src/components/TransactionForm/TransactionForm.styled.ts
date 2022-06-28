import styled from "styled-components";
import {
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  CircularProgress,
  CircularProgressProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const FormContainer = styled.form`
  background: ${({ theme: { palette } }) => palette.background.form};
  box-shadow: ${({ theme: { shadows } }) => shadows[10]};
  ${({ theme: { palette } }) => palette.background.blur};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 20px;
`;

export const Input = styled(TextField)<TextFieldProps>`
  background: ${({ theme: { palette } }) => palette.background.input};
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
  width: 100%;
  margin-bottom: 25px;
  position: relative;

  label {
    padding: 7px 0;
    color: ${({ theme: { palette } }) => palette.primary.contrastText};
    letter-spacing: 1px;
  }

  fieldset {
    border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
  }

  input {
    color: ${({ theme: { palette } }) => palette.primary.contrastText};
    padding: 15px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  p {
    color: ${({ theme: { palette } }) => palette.error.main};
    position: absolute;
    bottom: -20px;
    letter-spacing: 1px;
  }
`;

export const BottomWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled(Button)<ButtonProps>`
  align-self: flex-start;
  width: 120px;
  border-radius: ${({ theme: { shape } }) => shape.borderRadius}px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled(CircularProgress)<CircularProgressProps>``;

export const LoaderText = styled(Typography)<TypographyProps>`
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  margin-top: 15px;
  letter-spacing: 1px;

  &:last-child {
    margin-top: 0;
  }
`;
