import { screen } from "@testing-library/react";
import { Table } from "@mui/material";
import { renderWithAllProviders, SortDirection } from "../../../../helpers";
import { tableHeadItems, mockTransactions } from "../../data";
import TableHead from "./TableHead";

describe("TableHead component", () => {
  it("should render table head", () => {
    renderWithAllProviders(
      <Table>
        <TableHead
          headItems={tableHeadItems}
          tableSortBy="timestamp"
          setTableSortBy={jest.fn()}
          tableSortDirection={SortDirection.DESCENDING}
          setTableSortDirection={jest.fn()}
        />
      </Table>
    );

    const tableHeadContainer = screen.getByTestId(
      "table-head-container"
    ) as HTMLTableSectionElement;

    const tableHeadRow = screen.getByTestId(
      "table-head-row"
    ) as HTMLTableRowElement;

    const tableHeadSortLabel = screen.getAllByTestId(
      "table-head-sort-label"
    ) as HTMLSpanElement[];

    expect(tableHeadSortLabel.length).toBe(
      tableHeadItems.filter((item) => item.sortLabel !== undefined).length
    );

    const tableElements = [
      tableHeadContainer,
      tableHeadRow,
      ...tableHeadSortLabel,
    ];
    tableElements.forEach((item: HTMLElement) => {
      expect(item).toBeInTheDocument();
    });

    const tableHeadCells = tableHeadContainer.querySelectorAll(
      "th"
    ) as NodeListOf<HTMLTableCellElement>;
    expect(tableHeadCells.length).toBe(Object.keys(mockTransactions[0]).length);

    tableHeadCells.forEach((item, index) => {
      expect(item.textContent).toBe(tableHeadItems[index].title);
    });
  });
});
