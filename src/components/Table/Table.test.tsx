import { screen } from "@testing-library/react";
import { renderWithAllProviders } from "../../helpers";
import { mockTransactions } from "./data";
import Table from "./Table";

describe("Table component", () => {
  it("should render table", async () => {
    const transaction = [mockTransactions[0], mockTransactions[1]];
    renderWithAllProviders(<Table transactions={transaction} />);
    const tableContainer = screen.getByTestId(
      "table-container"
    ) as HTMLTableElement;
    const tableHead = screen.getByTestId(
      "table-head-container"
    ) as HTMLTableSectionElement;
    const tableBody = screen.getByTestId(
      "table-body-container"
    ) as HTMLTableSectionElement;
    const tableHeadRow = screen.getByTestId("table-head-row");

    const tableElements = [tableContainer, tableHead, tableHeadRow, tableBody];
    tableElements.forEach((item: HTMLElement) => {
      expect(item).toBeInTheDocument();
    });

    const tableHeadCells = tableHead.querySelectorAll("th");
    expect(tableHeadCells.length).toBe(Object.keys(mockTransactions[0]).length);

    const tableBodyRows = tableBody.querySelectorAll("tr");
    expect(tableBodyRows.length).toBe(transaction.length);

    const tableBodyCells = tableBody.querySelectorAll("td");
    expect(tableBodyCells.length).toBe(
      Object.keys(mockTransactions[0]).length * transaction.length
    );
  });

  it("should render table pagination", async () => {
    renderWithAllProviders(<Table transactions={mockTransactions} />);

    const tablePagination = screen.getByTestId("table-pagination");
    expect(tablePagination).toBeInTheDocument();
  });
});
