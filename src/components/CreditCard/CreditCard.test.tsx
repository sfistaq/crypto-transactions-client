import { screen, act, fireEvent } from "@testing-library/react";
import { SiEthereum } from "react-icons/si";
import CreditCard from "./CreditCard";
import { renderWithAllProviders, theme } from "../../helpers";

const mockAddress = "0x0000000000000000000000000000000000000000";

describe("CreditCard component", () => {
  it("should render card", async () => {
    renderWithAllProviders(
      <CreditCard
        balance="10"
        currency="ETH"
        address={mockAddress}
        icon={<SiEthereum />}
      />
    );
    const card = screen.getByTestId("credit-card-container") as HTMLDivElement;
    const cardIcon = screen.getByRole("img") as HTMLImageElement;
    const balance = screen.getByText("Balance: 10 ETH") as HTMLParagraphElement;
    const address = screen.getByText(
      `Address: ${mockAddress?.slice(0, 18)}...`
    ) as HTMLParagraphElement;

    const cardElements = [card, cardIcon, balance, address];
    cardElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    expect(card).toHaveStyle(`background-color: ${theme.palette.purple.main}`);
    expect(card).toHaveStyle(
      `background-image: ${theme.palette.background.creditCard}`
    );
    expect(card).toHaveStyle(`color: ${theme.palette.primary.contrastText}`);

    act(() => {
      fireEvent(
        address,
        new MouseEvent("mouseover", {
          bubbles: true,
        })
      );
    });

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent(mockAddress);
  });
});
