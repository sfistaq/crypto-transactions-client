import { screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { renderWithAllProviders, theme } from "../../helpers";
import ConnectWalletModal from "./ConnectWalletModal";

describe("ConnectWalletModal component", () => {
  it("should render and close modal on click close button", () => {
    const mockFun = jest.fn();
    const { rerender } = renderWithAllProviders(
      <ConnectWalletModal isOpen onClose={mockFun} />
    );

    const container = screen.getByTestId(
      "connect-modal-container"
    ) as HTMLDivElement;
    const title = screen.getByText(
      "Connect your wallet with one of available provider"
    ) as HTMLHeadingElement;
    const closeButton = screen.getByTestId(
      "modal-close-button"
    ) as HTMLButtonElement;

    const buttons = screen.getAllByRole("button");
    const buttonsTitles = ["Metamask", "Wallet Connect", "Coinbase Wallet"];

    buttons.forEach((button: HTMLElement, index: number) => {
      expect(button).toHaveTextContent(buttonsTitles[index]);
      expect(button).toHaveStyle(`
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
        cursor: pointer;
      `);
    });
    expect(buttons.length).toBe(3);

    const elements = [container, title, closeButton, ...buttons];
    elements.forEach((item: HTMLElement) => {
      expect(item).toBeInTheDocument();
    });

    fireEvent.click(closeButton);
    expect(mockFun).toBeCalledTimes(1);

    rerender(
      <ThemeProvider theme={theme}>
        <ConnectWalletModal isOpen={false} onClose={mockFun} />
      </ThemeProvider>
    );

    expect(container).not.toBeInTheDocument();
  });
});
