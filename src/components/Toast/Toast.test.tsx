import { screen, waitFor } from "@testing-library/react";
import { renderWithAllProviders } from "../../helpers";
import { customToast, ToastType } from "./Toast";

describe("Toast component", () => {
  it("should render toast", async () => {
    renderWithAllProviders(
      customToast(ToastType.SUCCESS, "Success", { autoClose: false })
    );

    await waitFor(async () => {
      const toast = screen.getByText("Success") as HTMLDivElement;
      const closeButton = screen.getByLabelText("close") as HTMLButtonElement;
      const toastElements = [toast, closeButton];
      toastElements.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });

  // TODO ADD TEST FOR TOAST WITH LINK
});
