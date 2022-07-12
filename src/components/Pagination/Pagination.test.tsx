import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  const page = 1;
  const pageCount = 5;
  it("should render", async () => {
    const mockFun = jest.fn();
    renderWithAllProviders(
      <Pagination page={page} count={pageCount} onChange={mockFun} />
    );
    const container = screen.getByTestId(
      "pagination-container"
    ) as HTMLDivElement;
    const prevButton = screen.getByLabelText(
      "Go to previous page"
    ) as HTMLButtonElement;
    const nextButton = screen.getByLabelText(
      "Go to next page"
    ) as HTMLButtonElement;
    const buttons = screen.getAllByRole("button") as HTMLButtonElement[];
    const paginationElements = [container, prevButton, nextButton, ...buttons];
    paginationElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(buttons.length).toBe(pageCount + 2);
    expect(container).toHaveStyle(
      `background-color: ${theme.palette.darkBlue.main}`
    );
    expect(buttons[1]).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
    expect(buttons[2]).toHaveStyle(`background-color: transparent`);
  });
});
