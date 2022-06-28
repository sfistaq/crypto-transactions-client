import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../connectors";
import { theme as MUITheme, GlobalStyle } from "../styles";
import Context from "../context/AppContext";

export const theme = MUITheme;

export const renderWithAllProviders = (children: ReactNode): RenderResult =>
  render(
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={MUITheme}>
        <GlobalStyle />
        <Context>{children}</Context>
        <ToastContainer role="alert" newestOnTop />
      </ThemeProvider>
    </Web3ReactProvider>
  );

export const resizeWindow = (x: number, y = 1600) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};
