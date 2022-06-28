import { screen, act, fireEvent } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import TransactionCard from "./TransactionCard";

const mockTransaction: TransactionType = {
  amount: "10",
  from: "0x97b98a5A6Ef7EB4eDD7add2495b26093f584Ffd2",
  keyword: "test keyword",
  message: "test message",
  receiver: "0xB52eF9FC885cD3C38223eB32dEDa1B0dEa3B9E79",
  timestamp: "1655242759",
  transactionFee: "0.1",
};

describe("TransactionCard component", () => {
  it("should render card", async () => {
    renderWithAllProviders(
      <TransactionCard loading={false} transaction={mockTransaction} />
    );

    const container = screen.getByTestId(
      "transaction-card-container"
    ) as HTMLDivElement;
    const from = screen.getByRole("link", {
      name: mockTransaction.from,
    }) as HTMLAnchorElement;
    const receiver = screen.getByRole("link", {
      name: mockTransaction.receiver,
    }) as HTMLAnchorElement;
    const time = screen.getByRole("status") as HTMLParagraphElement;
    const message = screen.getByTestId(
      "transaction-card-message"
    ) as HTMLParagraphElement;
    const amount = screen.getByTestId(
      "transaction-card-amount"
    ) as HTMLParagraphElement;
    const image = screen.getByRole("img") as HTMLImageElement;

    const cardElements = [
      container,
      from,
      receiver,
      image,
      time,
      message,
      amount,
    ];

    cardElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    expect(container).toHaveStyle(
      `background:${theme.palette.background.transactionCard}`
    );

    const itemsWithTooltip = [from, receiver, amount];

    itemsWithTooltip.forEach(async (item) => {
      act(() => {
        fireEvent(
          item,
          new MouseEvent("mouseover", {
            bubbles: true,
          })
        );
      });
      const tooltip = await screen.findByRole("tooltip");
      expect(tooltip).toBeInTheDocument();
    });
  });
});
