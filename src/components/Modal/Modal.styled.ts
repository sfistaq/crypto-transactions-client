import styled from "styled-components";
import {
  Backdrop as MUIBackdrop,
  Dialog as MUIDialog,
  DialogContent as MUIDialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { device } from "../../styles";

export const Backdrop = styled(MUIBackdrop)`
  backdrop-filter: blur(3px);
`;

export const Modal = styled(MUIDialog)`
  div {
    &:first-child {
      background-color: transparent;
      margin: 0;
      border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    }
  }
`;

export const DialogContent = styled(MUIDialogContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { palette } }) => palette.background.modal};
  box-shadow: ${({ theme: { shadows } }) => shadows[10]};
  ${({ theme: { palette } }) => palette.background.blur};
  padding: 40px 5px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  .MuiCardContent-root {
    border: 2px solid ${({ theme }) => theme.palette.primary.contrastText};
    backdrop-filter: blur(10px);
  }

  @media ${device.up.custom(345)} {
    padding: 40px 15px;
  }

  @media ${device.up.mobileM} {
    padding: 40px 20px;
  }

  @media ${device.up.mobileL} {
    padding: 40px 30px;
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  right: ${({ theme }) => theme.spacing(1)};
  top: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
