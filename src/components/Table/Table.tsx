import type { TableContainerProps } from "@mui/material";
import { useState, useMemo, useContext } from "react";
import { AppContext, LoadingType } from "../../context";
import { Pagination, usePagination, Modal, TransactionCard } from "..";
import { TableHead, TableBody } from "./components";
import { sortArrayObObj, SortDirection } from "../../helpers";
import { tableHeadItems } from "./data";
import * as S from "./Table.styled";

export type ITableProps = {
  transactions: TransactionType[];
} & React.HTMLAttributes<HTMLDivElement> &
  TableContainerProps;

const Table = ({ transactions, ...rest }: ITableProps) => {
  const {
    state: { loading },
  } = useContext(AppContext);
  const [tableSortBy, setTableSortBy] =
    useState<keyof TransactionType>("timestamp");
  const [tableSortDirection, setTableSortDirection] = useState<SortDirection>(
    SortDirection.DESCENDING
  );
  const [modalContent, setModalContent] = useState<TransactionType | null>(
    null
  );
  const {
    currentPage,
    paginationCount,
    handleChangePage,
    indexOfFirstItem,
    indexOfLastItem,
  } = usePagination(transactions, 8);

  const sortedTableItems = useMemo(
    () =>
      sortArrayObObj(transactions, tableSortBy, tableSortDirection).slice(
        indexOfFirstItem,
        indexOfLastItem
      ),
    [tableSortBy, tableSortDirection, currentPage, transactions]
  );

  return (
    <S.Container>
      <S.Wrapper {...rest} data-testid="table-container">
        <S.Table>
          <TableHead
            headItems={tableHeadItems}
            tableSortBy={tableSortBy}
            setTableSortBy={setTableSortBy}
            tableSortDirection={tableSortDirection}
            setTableSortDirection={setTableSortDirection}
          />
          <TableBody
            transactions={sortedTableItems}
            setModalContent={setModalContent}
          />
        </S.Table>
      </S.Wrapper>
      {transactions.length > 8 && (
        <Pagination
          data-testid="table-pagination"
          count={paginationCount}
          page={currentPage}
          onChange={handleChangePage}
        />
      )}
      {modalContent && (
        <Modal
          open={modalContent !== null}
          onClose={() => setModalContent(null)}
        >
          <TransactionCard
            transaction={modalContent}
            loading={loading === LoadingType.FETCH_GIFS}
          />
        </Modal>
      )}
    </S.Container>
  );
};

export default Table;
