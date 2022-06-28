import styled from "styled-components";
import { CircularProgress, CircularProgressProps } from "@mui/material";
import { device } from "../../styles";

export const Container = styled.section<{ isLoading: boolean }>`
  display: flex;
  height: 100%;
  min-height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ isLoading }) => !isLoading && "auto"};
`;

export const Loader = styled(CircularProgress)<CircularProgressProps>``;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  justify-items: center;

  @media ${device.up.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.up.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PaginationWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
`;
