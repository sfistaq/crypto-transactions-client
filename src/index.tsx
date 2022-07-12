import React from "react";
import ReactDOM from "react-dom/client";
import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import { getLibrary } from "./connectors";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Context from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";

const rootEl = document.getElementById("root") as HTMLDivElement;
const root = rootEl && ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Context>
          <App />
        </Context>
      </ThemeProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);

reportWebVitals();
