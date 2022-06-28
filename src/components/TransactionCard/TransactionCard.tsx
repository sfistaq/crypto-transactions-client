import { Tooltip, CardProps } from "@mui/material";
import * as S from "./TransactionCard.styled";
import { useFetchGif } from "../../hooks";
import { config } from "../../config";

export type ITransactionCardProps = {
  transaction: TransactionType;
  loading: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CardProps;

const TransactionCard = ({
  transaction,
  loading,
  ...rest
}: ITransactionCardProps) => {
  const {
    keyword,
    from,
    receiver,
    amount,
    message,
    timestamp,
    transactionFee,
  } = transaction;
  const { gifUrl } = useFetchGif(keyword);
  const { etherscanUrl, symbol } = config.CONTRACT;

  return (
    <S.TransactionCard {...rest} data-testid="transaction-card-container">
      <S.Content>
        <S.CardLink href={`${etherscanUrl}address/${from}`} target="_blank">
          <Tooltip title={from} role="tooltip">
            <S.CardText variant="body1">From: {from}</S.CardText>
          </Tooltip>
        </S.CardLink>
        <S.CardLink href={`${etherscanUrl}address/${receiver}`} target="_blank">
          <Tooltip title={receiver}>
            <S.CardText variant="body1">To: {receiver}</S.CardText>
          </Tooltip>
        </S.CardLink>
        <Tooltip title={`Transaction fee: ${transactionFee} ${symbol}`}>
          <S.CardText variant="body1" data-testid="transaction-card-message">
            Amount: {amount} {symbol}
          </S.CardText>
        </Tooltip>
        <Tooltip title={message.length > 20 ? message : ""}>
          <S.CardText variant="body1" data-testid="transaction-card-amount">
            Message: {message}
          </S.CardText>
        </Tooltip>

        {loading ? (
          <S.LoaderWrapper>
            <S.Loader />
          </S.LoaderWrapper>
        ) : (
          <S.CardImage image={gifUrl} component="img" />
        )}
        <S.Time
          label={new Date(Number(timestamp) * 1000).toLocaleDateString()}
          color="info"
          role="status"
        />
      </S.Content>
    </S.TransactionCard>
  );
};

export default TransactionCard;
