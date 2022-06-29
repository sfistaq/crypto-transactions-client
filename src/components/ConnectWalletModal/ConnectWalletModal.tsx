import { Modal, PrimaryButton } from "..";
import { useConnectWallet } from "../../hooks";
import { detectMetamaskHelper } from "../../helpers";
import { ReactComponent as WalletConnect } from "../../assets/icons/walletconnect.svg";
import { ReactComponent as MetaMask } from "../../assets/icons/metamask.svg";
import { ReactComponent as CoinBase } from "../../assets/icons/coinbase.svg";
import * as S from "./ConnectWalletModal.styled";

export type IConnectWalletModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const ConnectWalletModal = ({
  isOpen,
  onClose,
  ...rest
}: IConnectWalletModalProps) => {
  const { connectWallet, ConnectorType } = useConnectWallet();
  return (
    <Modal open={isOpen} onClose={onClose}>
      <S.Container {...rest}>
        <S.Title>Connect your wallet with one of available provider</S.Title>
        <PrimaryButton
          text="Metamask"
          handleClick={() => {
            if (!detectMetamaskHelper()) return;
            connectWallet(ConnectorType.METAMASK);
          }}
          icon={<MetaMask />}
        />
        <PrimaryButton
          text="Wallet Connect"
          handleClick={() => connectWallet(ConnectorType.WALLETCONNECT)}
          icon={<WalletConnect />}
        />
        <PrimaryButton
          text="Coinbase Wallet"
          handleClick={() => connectWallet(ConnectorType.WALLETLINK)}
          icon={<CoinBase />}
        />
      </S.Container>
    </Modal>
  );
};

export default ConnectWalletModal;
