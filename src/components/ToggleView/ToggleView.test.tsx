import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import ToggleView from "./ToggleView";

enum ToggleViewButtons {
  BUTTON1 = "BUTTON1",
  BUTTON2 = "BUTTON2",
}

describe("ToggleView component", () => {
  it("should render buttons", () => {
    const mockFun = jest.fn();
    renderWithAllProviders(
      <ToggleView
        buttons={Object.values(ToggleViewButtons).map(
          (item: ToggleViewButtons) => item
        )}
        toggleView={ToggleViewButtons.BUTTON1}
        setToggleView={mockFun}
      />
    );
    const container = screen.getByTestId(
      "toggle-view-container"
    ) as HTMLDivElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle("margin-bottom: 20px");

    Object.values(ToggleViewButtons).forEach((item) => {
      const button = screen.getByText(item) as HTMLButtonElement;
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(item);
    });

    const button1 = screen.getByText(
      ToggleViewButtons.BUTTON1
    ) as HTMLButtonElement;
    expect(button1).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );

    const button2 = screen.getByText(
      ToggleViewButtons.BUTTON2
    ) as HTMLButtonElement;
    expect(button2).toHaveStyle(`background-color: transparent`);
  });
});
