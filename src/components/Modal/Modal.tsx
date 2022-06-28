import { Paper, DialogProps } from "@mui/material";
import * as S from "./Modal.styled";

export type IModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  DialogProps;

const Modal = ({ open, onClose, children, ...rest }: IModalProps) => {
  const closeOnOverlay = (event: React.MouseEvent) => {
    if ((event.target as Element).classList.contains("MuiDialog-container")) {
      onClose();
    }
  };

  return (
    <S.Backdrop
      data-testid="modal-backdrop"
      open={open}
      onClick={(event: React.MouseEvent) => closeOnOverlay(event)}
    >
      <S.Modal
        {...rest}
        open={open}
        PaperComponent={Paper}
        data-testid="modal-container"
      >
        <S.CloseButton
          onClick={() => onClose()}
          data-testid="modal-close-button"
        />
        <S.DialogContent data-testid="modal-content-container">
          {children}
        </S.DialogContent>
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
