import { screen } from "@testing-library/react";
import { renderWithAllProviders, theme } from "../../helpers";
import Subtitle from "./Subtitle";

describe("Subtitle component", () => {
  it("should render text", () => {
    renderWithAllProviders(<Subtitle text="Subtitle" />);
    const subtitle = screen.getByText("Subtitle") as HTMLHeadElement;
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveStyle(
      `color: ${theme.palette.primary.contrastText}`
    );
  });
});
