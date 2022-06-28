import styled from "styled-components";
import {
  TableBody as MUITableBody,
  TableBodyProps,
  TableRow as MUITableRow,
  TableCell as MUITableCell,
  Typography as MUITypography,
  TypographyProps,
} from "@mui/material";
import { cellWidth } from "../../Table.styled";

export const TableBody = styled(MUITableBody)<TableBodyProps>``;

export const TableRow = styled(MUITableRow)`
  transition: all 0.2s ease-in-out;
  background: ${({ theme: { palette } }) => palette.background.tableRow};

  &:hover {
    background: ${({ theme: { palette } }) => palette.background.tableRowHover};
    cursor: pointer;
  }
`;

export const TableCell = styled(MUITableCell)`
  color: inherit;
  border-color: ${({ theme: { palette } }) => palette.dark.transparent10};
  ${cellWidth};
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const Text = styled(MUITypography)<TypographyProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
