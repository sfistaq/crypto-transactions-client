import styled from "styled-components";
import {
  TableHead as MUITableHead,
  TableHeadProps,
  TableRow as MUITableRow,
  TableCell as MUITableCell,
  Typography as MUITypography,
  TypographyProps,
  TableSortLabel,
} from "@mui/material";
import { cellWidth } from "../../Table.styled";

export const TableHead = styled(MUITableHead)<TableHeadProps>``;

export const HeadRow = styled(MUITableRow)`
  background: ${({ theme: { palette } }) => palette.background.form};
  box-shadow: ${({ theme: { shadows } }) => shadows[10]};
  ${({ theme: { palette } }) => palette.background.blur};
`;

export const HeadCell = styled(MUITableCell)`
  color: inherit;
  border-bottom: none;
  ${cellWidth};
`;

export const SortLabel = styled(TableSortLabel)`
  svg {
    fill: ${({ theme: { palette } }) => palette.primary.contrastText};
  }
`;

interface IHeadText {
  sortable?: keyof TransactionType;
}

export const HeadText = styled(MUITypography)<TypographyProps & IHeadText>`
  cursor: ${({ sortable }: IHeadText) => (sortable ? "pointer" : "default")};
`;
