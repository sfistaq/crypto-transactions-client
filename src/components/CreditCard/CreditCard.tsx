import { Tooltip } from "@mui/material";
import * as S from "./CreditCard.styled";

export type ICreditCardProps = {
  balance: string;
  currency: string;
  address: string;
  icon: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

const CreditCard = ({
  balance,
  currency,
  address,
  icon,
  ...rest
}: ICreditCardProps) => (
  <S.Card {...rest} data-testid="credit-card-container">
    <S.TopWrapper>
      <S.Icon>{icon}</S.Icon>
    </S.TopWrapper>
    <S.BottomWrapper>
      <S.Text variant="caption" noWrap>
        Balance: {balance?.slice(0, 5)} {currency}
      </S.Text>
      <Tooltip title={address}>
        <S.Link
          href={`https://rinkeby.etherscan.io/address/${address}`}
          target="_blank"
          rel="noreferrer"
          variant="body2"
        >
          <S.Text variant="caption" noWrap>
            Address: {address?.slice(0, 18)}...
          </S.Text>
        </S.Link>
      </Tooltip>
    </S.BottomWrapper>
  </S.Card>
);

export default CreditCard;
