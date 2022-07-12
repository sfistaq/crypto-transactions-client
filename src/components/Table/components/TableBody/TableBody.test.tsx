import { screen } from "@testing-library/react";
import { Table } from "@mui/material";
import { mockTransactions } from "../../data";
import { renderWithAllProviders, theme } from "../../../../helpers";
import TableBody from "./TableBody";

describe("TableBody component", () => {
  it("should render table body", () => {
    renderWithAllProviders(
      <Table>
        <TableBody
          transactions={mockTransactions}
          setModalContent={jest.fn()}
        />
      </Table>
    );

    const tableBodyContainer = screen.getByTestId(
      "table-body-container"
    ) as HTMLTableSectionElement;

    const tableBodyRows = tableBodyContainer.querySelectorAll("tr");
    expect(tableBodyRows.length).toBe(mockTransactions.length);
    expect(tableBodyRows[0]).toHaveStyle(
      `background-color: ${theme.palette.background.tableRow}`
    );

    const tableBodyCells = tableBodyContainer.querySelectorAll("td");
    expect(tableBodyCells.length).toBe(
      Object.keys(mockTransactions[0]).length * mockTransactions.length
    );
  });
});
