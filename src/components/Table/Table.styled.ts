import styled, { css } from "styled-components";
import {
  TableContainer as MUITableContainer,
  TableContainerProps,
  Table as MUITable,
  TableProps,
} from "@mui/material";

export const cellWidth = css`
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;

  &:nth-child(1) {
    width: 90px;
  }

  &:nth-child(2) {
    width: 250px;
    p {
      width: 250px;
    }
  }

  &:nth-child(3) {
    width: 250px;
    p {
      width: 250px;
    }
  }

  &:nth-child(4) {
    width: 120px;
    p {
      width: 120px;
    }
  }

  &:nth-child(5) {
    width: 120px;
    p {
      width: 120px;
    }
  }

  &:nth-child(6) {
    width: 120px;
    p {
      width: 120px;
    }
  }

  &:nth-child(7) {
    width: 110px;
    p {
      width: 110px;
    }
  }
`;

export const Container = styled.div``;

export const Wrapper = styled(MUITableContainer)<TableContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: calc(100vw - 20px);
  max-width: 1200px;
`;

export const Table = styled(MUITable)<TableProps>`
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  align-self: flex-start;
`;
