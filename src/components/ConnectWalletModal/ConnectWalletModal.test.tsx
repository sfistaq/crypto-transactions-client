import { screen, fireEvent } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import ConnectWalletModal from "./ConnectWalletModal";

describe("ConnectWalletModal component", () => {
  it("should render and close modal on click ", () => {
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

    rerender(<ConnectWalletModal isOpen={false} onClose={mockFun} />);
    expect(container).not.toBeInTheDocument();
  });
});
