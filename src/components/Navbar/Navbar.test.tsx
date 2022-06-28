import { screen, act, fireEvent } from "@testing-library/react";
import { SiEthereum } from "react-icons/si";
import { renderWithAllProviders, resizeWindow, theme } from "../../helpers";
import { size } from "../../styles/breakpoints";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  const mockLinks = ["link1", "link2", "link3"];
  const title = "navbar test title";

  it("should render desktop view", async () => {
    act(() => {
      resizeWindow(size.laptop);
    });
    renderWithAllProviders(
      <Navbar links={mockLinks} icon={<SiEthereum />} title={title} />
    );
    const container = screen.getByTestId("navbar-container") as HTMLDivElement;
    const icon = screen.getByRole("img") as HTMLImageElement;
    const header = screen.getByText(title) as HTMLHeadElement;
    const navBarLinks = screen.getAllByTestId("navbar-link") as HTMLLIElement[];
    const navBarElements = [container, header, icon, ...navBarLinks];
    navBarElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(navBarLinks.length).toBe(mockLinks.length);
    expect(container).toHaveStyle(`background-color: transparent`);
  });

  it("should toggle mobile sidebar", async () => {
    act(() => {
      resizeWindow(size.mobileS);
    });

    renderWithAllProviders(
      <Navbar links={mockLinks} icon={<SiEthereum />} title={title} />
    );
    const container = screen.getByTestId("navbar-container") as HTMLDivElement;
    const icon = screen.getByRole("img") as HTMLImageElement;
    const header = screen.getByText(title) as HTMLHeadElement;
    const mobileOpen = screen.getByTestId(
      "sidebar-open-button"
    ) as HTMLButtonElement;
    const navBarElements = [container, header, icon, mobileOpen];
    navBarElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(container).toHaveStyle(`background-color: transparent`);

    act(() => {
      fireEvent(
        mobileOpen,
        new MouseEvent("click", {
          bubbles: true,
        })
      );
    });

    const sidebar = screen.getByTestId("sidebar-container") as HTMLDivElement;
    const navMobileLinks = screen.getAllByTestId(
      "sidebar-link"
    ) as HTMLLIElement[];
    const closeMobile = screen.getByTestId(
      "sidebar-close-button"
    ) as HTMLButtonElement;
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveStyle(
      `background-color: ${theme.palette.background.navbar}`
    );
    expect(closeMobile).toBeInTheDocument();
    navMobileLinks.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(navMobileLinks.length).toBe(mockLinks.length);

    act(() => {
      fireEvent(
        closeMobile,
        new MouseEvent("click", {
          bubbles: true,
        })
      );
    });

    expect(sidebar).not.toBeInTheDocument();
  });
});
