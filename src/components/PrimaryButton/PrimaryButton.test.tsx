import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton component", () => {
  it("should render primary button", async () => {
    renderWithAllProviders(
      <PrimaryButton
        handleClick={jest.fn()}
        text="Connect Wallet"
        color="primary"
      />
    );
    const primaryButton = screen.getByTestId(
      "connect-button"
    ) as HTMLButtonElement;
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveTextContent("Connect Wallet");
    expect(primaryButton).toHaveStyle(`color: ${theme.palette.common.white}`);
    expect(primaryButton).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
  });

  it("should render secondary button", async () => {
    renderWithAllProviders(
      <PrimaryButton
        handleClick={jest.fn()}
        text="Connect Wallet"
        color="secondary"
      />
    );
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
    renderWithAllProviders(
      <PrimaryButton handleClick={jest.fn()} text="Connect Wallet" disabled />
    );
    const connectButton = screen.getByTestId(
      "connect-button"
    ) as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveAttribute("disabled");
  });
});
