import { useContext, useEffect, useId, useState } from "react";
import {
  Subtitle,
  TransactionCard,
  Pagination,
  usePagination,
  ToggleView,
  Table,
} from "../../components";
import { AppContext, LoadingType } from "../../context";
import { useTransactions, usePageWide } from "../../hooks";
import { sortArrayObObj, SortDirection } from "../../helpers";
import { size } from "../../styles";
import * as S from "./Transactions.styled";

enum ToggleViewButtons {
  CARDS = "CARDS",
  TABLE = "TABLE",
}

const Transactions = () => {
  const [toggleView, setToggleView] = useState<ToggleViewButtons>(
    ToggleViewButtons.CARDS
  );
  const id = useId();
  const {
    state: { address, loading, transactions },
  } = useContext(AppContext);
  const { getAllTransactions } = useTransactions();
  const {
    currentPage,
    paginationCount,
    handleChangePage,
    setItemsPerPage,
    indexOfFirstItem,
    indexOfLastItem,
  } = usePagination(transactions, 3);
  const { pageWide } = usePageWide();

  useEffect(() => {
    if (address) {
      getAllTransactions();
    }
  }, [address]);

  useEffect(() => {
    if (pageWide <= size.tablet) {
      setItemsPerPage(2);
    }

    if (pageWide > size.tablet && pageWide <= size.laptop) {
      setItemsPerPage(4);
    }

    if (pageWide > size.laptop) {
      setItemsPerPage(3);
    }
  }, [pageWide]);

  return (
    <S.Container
      id="transactions"
      isLoading={loading === LoadingType.FETCH_TRANSACTIONS}
    >
      {address &&
        transactions.length > 0 &&
        loading !== LoadingType.FETCH_TRANSACTIONS && (
          <Subtitle text="Lastest Transactions" />
        )}
      {loading === LoadingType.FETCH_TRANSACTIONS && <S.Loader />}
      {address &&
        transactions.length > 0 &&
        loading !== LoadingType.FETCH_TRANSACTIONS && (
          <S.CardWrapper>
            <ToggleView
              buttons={Object.values(ToggleViewButtons).map(
                (item: ToggleViewButtons) => item
              )}
              toggleView={toggleView}
              setToggleView={setToggleView}
            />

            {/* //TODO CARDS GRID SEPARATE COMPONENT ?? */}
            {toggleView === ToggleViewButtons.CARDS && (
              <S.CardGrid>
                {sortArrayObObj(
                  transactions,
                  "timestamp",
                  SortDirection.DESCENDING
                )
                  .slice(indexOfFirstItem, indexOfLastItem)
                  .map((transaction: TransactionType) => (
                    <TransactionCard
                      key={`transaction-card-${
                        id + transaction.keyword + transaction.timestamp
                      }`}
                      transaction={transaction}
                      loading={loading === LoadingType.FETCH_GIFS}
                    />
                  ))}
                <S.PaginationWrapper>
                  <Pagination
                    count={paginationCount}
                    page={currentPage}
                    onChange={handleChangePage}
                  />
                </S.PaginationWrapper>
              </S.CardGrid>
            )}
            {toggleView === ToggleViewButtons.TABLE && (
              <Table transactions={transactions} />
            )}
          </S.CardWrapper>
        )}
    </S.Container>
  );
};

export default Transactions;
