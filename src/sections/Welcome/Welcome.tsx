import { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { IoIosWallet } from "react-icons/io";
import { AppContext } from "../../context";
import { useConnectWallet } from "../../hooks";
import { config } from "../../config";
import {
  CreditCard,
  TransactionForm,
  PrimaryButton,
  ConnectWalletModal,
} from "../../components";

import * as S from "./Welcome.styled";

const Welcome = () => {
  const {
    state: { address, balance },
  } = useContext(AppContext);
  const { disconnectWallet, active, showConnectModal, setShowConnectModal } =
    useConnectWallet();
  const { symbol } = config.CONTRACT;

  const handleConnect = () =>
    active ? disconnectWallet() : setShowConnectModal(true);

  return (
    <>
      <S.Container>
        <S.LeftWrapper>
          {address && (
            <CreditCard
              balance={balance}
              currency={symbol}
              address={address}
              icon={<SiEthereum />}
            />
          )}
          {!address && (
            <S.Text variant="subtitle1">
              connect wallet to see latest transactions
            </S.Text>
          )}
          <PrimaryButton
            color="primary"
            text={active ? "Disconnect Wallet" : "Connect Wallet"}
            icon={<IoIosWallet />}
            handleClick={handleConnect}
          />
        </S.LeftWrapper>
        <S.RightWrapper>
          <TransactionForm />
        </S.RightWrapper>
      </S.Container>
      {showConnectModal && (
        <ConnectWalletModal
          isOpen={showConnectModal}
          onClose={() => setShowConnectModal(false)}
        />
      )}
    </>
  );
};
export default Welcome;
