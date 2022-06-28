import { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { AppContext } from "../../context";
import { config } from "../../config";
import { CreditCard, TransactionForm, ConnectWallet } from "../../components";
import * as S from "./Welcome.styled";

const Welcome = () => {
  const {
    state: { address, balance },
  } = useContext(AppContext);
  const { symbol } = config.CONTRACT;

  return (
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
        <ConnectWallet color="primary" />
      </S.LeftWrapper>
      <S.RightWrapper>
        <TransactionForm />
      </S.RightWrapper>
    </S.Container>
  );
};
export default Welcome;
