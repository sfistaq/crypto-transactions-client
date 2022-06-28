import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import ConnectWallet from "./ConnectWallet";

describe("ConnectWallet component", () => {
  it("should render primary button", async () => {
    renderWithAllProviders(<ConnectWallet color="primary" />);
    const connectButton = screen.getByTestId(
      "connect-button"
    ) as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveStyle(`color: ${theme.palette.common.white}`);
    expect(connectButton).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
  });

  it("should render secondary button", async () => {
    renderWithAllProviders(<ConnectWallet color="secondary" />);
    const connectButton = screen.getByTestId(
      "connect-button"
    ) as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveStyle(`color: ${theme.palette.common.white}`);
    expect(connectButton).toHaveStyle(
      `background-color: ${theme.palette.secondary.main}`
    );
  });

  it("should render disabled button", async () => {
    renderWithAllProviders(<ConnectWallet disabled />);
    const connectButton = screen.getByTestId(
      "connect-button"
    ) as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveAttribute("disabled");
  });
});
