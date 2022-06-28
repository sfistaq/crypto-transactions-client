import { Tooltip, TableBodyProps } from "@mui/material";
import { config } from "../../../../config";
import * as S from "./TableBody.styled";

export type ITableBodyProps = {
  transactions: TransactionType[];
  setModalContent: (content: TransactionType) => void;
} & React.HTMLAttributes<HTMLTableSectionElement> &
  TableBodyProps;

const TableBody = ({
  transactions,
  setModalContent,
  ...rest
}: ITableBodyProps) => {
  const { symbol } = config.CONTRACT;

  return (
    <S.TableBody {...rest} data-testid="table-body-container">
      {transactions.map((item: TransactionType) => (
        <S.TableRow
          key={`table-row-${item.timestamp}`}
          data-testid="table-body-row"
          onClick={() => setModalContent(item)}
        >
          <S.TableCell data-testid="table-body-cell">
            {new Date(Number(item.timestamp) * 1000).toLocaleDateString()}
          </S.TableCell>
          <Tooltip title={item.from}>
            <S.TableCell data-testid="table-body-cell">
              <S.Text> {item.from}</S.Text>
            </S.TableCell>
          </Tooltip>
          <Tooltip title={item.receiver}>
            <S.TableCell data-testid="table-body-cell">
              <S.Text> {item.receiver}</S.Text>
            </S.TableCell>
          </Tooltip>
          <S.TableCell data-testid="table-body-cell">
            <S.Text>
              {item.amount} {symbol}
            </S.Text>
          </S.TableCell>
          <S.TableCell data-testid="table-body-cell">
            <S.Text>
              {item.transactionFee} {symbol}
            </S.Text>
          </S.TableCell>
          <Tooltip title={item.message.length > 13 ? item.message : ""}>
            <S.TableCell data-testid="table-body-cell">
              <S.Text> {item.message}</S.Text>
            </S.TableCell>
          </Tooltip>
          <S.TableCell data-testid="table-body-cell">
            <S.Text> {item.keyword}</S.Text>
          </S.TableCell>
        </S.TableRow>
      ))}
    </S.TableBody>
  );
};

export default TableBody;
