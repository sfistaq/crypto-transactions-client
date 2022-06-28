import { IoIosWallet } from "react-icons/io";
import type { ButtonProps } from "@mui/material";
import { useConnectWallet } from "../../hooks";
import * as S from "./ConnectWallet.styled";

export type IConnectWalletProps = React.HTMLAttributes<HTMLButtonElement> &
  ButtonProps;

const ConnectWallet = ({ ...rest }: IConnectWalletProps) => {
  const { connectWallet, disconnectWallet, active, ConnectorType } =
    useConnectWallet();

  const connect = () => {
    connectWallet(ConnectorType.METAMASK);
  };

  return (
    <S.ConnectButton
      {...rest}
      onClick={active ? disconnectWallet : connect}
      variant="contained"
      endIcon={<IoIosWallet />}
      data-testid="connect-button"
    >
      {active ? "Disconnect Wallet" : "Connect Wallet"}
    </S.ConnectButton>
  );
};

export default ConnectWallet;
