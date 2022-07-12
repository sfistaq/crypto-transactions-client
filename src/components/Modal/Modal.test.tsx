import { screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { renderWithAllProviders, theme } from "../../helpers";
import Modal from "./Modal";

describe("Modal component", () => {
  it("should render and close modal on click ", () => {
    const mockFun = jest.fn();
    const { rerender } = renderWithAllProviders(
      <Modal open onClose={mockFun}>
        <div>test</div>
      </Modal>
    );
    const container = screen.getByTestId("modal-container") as HTMLDivElement;
    const backdrop = screen.getByTestId("modal-backdrop") as HTMLDivElement;
    const closeButton = screen.getByTestId(
      "modal-close-button"
    ) as HTMLButtonElement;
    const content = screen.getByTestId(
      "modal-content-container"
    ) as HTMLDivElement;

    const elements = [container, backdrop, closeButton, content];

    elements.forEach((item: HTMLElement) => {
      expect(item).toBeInTheDocument();
    });

    expect(content).toHaveTextContent("test");
    expect(content).toHaveStyle(
      `background-color: ${theme.palette.background.modal}`
    );
    expect(closeButton).toHaveStyle(`
        color: ${theme.palette.primary.contrastText};
        cursor: pointer;
    `);

    fireEvent.click(closeButton);
    expect(mockFun).toBeCalledTimes(1);

    rerender(
      <ThemeProvider theme={theme}>
        <Modal open={false} onClose={mockFun}>
          <div>test</div>
        </Modal>
      </ThemeProvider>
    );
    expect(container).not.toBeInTheDocument();
  });
});
