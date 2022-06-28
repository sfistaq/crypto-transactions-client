import type { TableHeadProps } from "@mui/material";
import { SortDirection } from "../../../../helpers";
import * as S from "./TableHead.styled";

export type ITableHeadProps = {
  headItems: ITableHead[];
  tableSortDirection: SortDirection;
  tableSortBy: keyof TransactionType;
  setTableSortBy: (sortBy: keyof TransactionType) => void;
  setTableSortDirection: (sortDirection: SortDirection) => void;
} & React.HTMLAttributes<HTMLTableSectionElement> &
  TableHeadProps;

const TableHead = ({
  headItems,
  tableSortBy,
  setTableSortBy,
  tableSortDirection,
  setTableSortDirection,
  ...rest
}: ITableHeadProps) => {
  const handleSort = (property: keyof TransactionType) => {
    setTableSortBy(property);
    const sortDirection =
      tableSortDirection === SortDirection.DESCENDING
        ? SortDirection.ASCENDING
        : SortDirection.DESCENDING;

    setTableSortDirection(sortDirection);
  };

  return (
    <S.TableHead {...rest} data-testid="table-head-container">
      <S.HeadRow data-testid="table-head-row">
        {headItems.map(({ title, sortLabel }: ITableHead) => (
          <S.HeadCell key={`head-item-${title}`} data-testid="table-head-cell">
            <S.HeadText
              variant="body1"
              onClick={() => {
                if (sortLabel) {
                  handleSort(sortLabel);
                }
              }}
              sortable={sortLabel}
            >
              {title}
              {sortLabel && (
                <S.SortLabel
                  data-testid="table-head-sort-label"
                  onClick={() => handleSort(sortLabel)}
                  active={tableSortBy === sortLabel}
                  direction={
                    tableSortDirection === SortDirection.ASCENDING
                      ? "asc"
                      : "desc"
                  }
                />
              )}
            </S.HeadText>
          </S.HeadCell>
        ))}
      </S.HeadRow>
    </S.TableHead>
  );
};

export default TableHead;
