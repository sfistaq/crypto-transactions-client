import type { PaginationProps } from "@mui/material";
import * as S from "./Pagination.styled";

export type IPaginationProps = {
  page: number;
  count: number;
  onChange: (_event: React.ChangeEvent<unknown>, pageNumber: number) => void;
  color?: "primary" | "secondary" | "standard";
  shape?: "circular" | "rounded";
} & PaginationProps;

const Pagination = ({
  page,
  count,
  onChange,
  color = "primary",
  shape = "rounded",
  ...rest
}: IPaginationProps) => (
  <S.Pagination
    data-testid="pagination-container"
    page={page}
    count={count}
    shape={shape}
    color={color}
    onChange={onChange}
    {...rest}
  />
);

export default Pagination;
