import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton component", () => {
  it("should render primary button", () => {
    renderWithAllProviders(
      <PrimaryButton
        handleClick={jest.fn()}
        text="Connect Wallet"
        color="primary"
      />
    );
    const primaryButton = screen.getByRole("button") as HTMLButtonElement;
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveTextContent("Connect Wallet");
    expect(primaryButton).toHaveStyle(`
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.primary.main};
    `);
  });

  it("should render secondary button", () => {
    renderWithAllProviders(
      <PrimaryButton
        handleClick={jest.fn()}
        text="Connect Wallet"
        color="secondary"
      />
    );
    const connectButton = screen.getByRole("button") as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveStyle(`
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.secondary.main};
    `);
  });

  it("should render disabled button", () => {
    renderWithAllProviders(
      <PrimaryButton handleClick={jest.fn()} text="Connect Wallet" disabled />
    );
    const connectButton = screen.getByRole("button") as HTMLButtonElement;
    expect(connectButton).toBeInTheDocument();
    expect(connectButton).toHaveTextContent("Connect Wallet");
    expect(connectButton).toHaveAttribute("disabled");
  });
});
