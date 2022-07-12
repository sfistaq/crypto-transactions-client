import { screen, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { renderWithAllProviders, theme } from "../../helpers";
import useFormInputs from "./useFormInputs";
import TransactionFrom from "./TransactionForm";

let inputsObj: FormDataType;
let placeholderFormat: (name: string) => void;

describe("TransactionFrom component", () => {
  beforeEach(async () => {
    renderWithAllProviders(<TransactionFrom />);

    const { result } = renderHook(() => useFormInputs());
    inputsObj = result.current.InputFields;
    placeholderFormat = result.current.placeholderFormat;
    expect(typeof inputsObj).toBe("object");
  });

  it("should render form container", async () => {
    const container = screen.getByTestId(
      "transaction-form-container"
    ) as HTMLFormElement;

    const inputs: HTMLInputElement[] = [];

    Object.values(inputsObj).forEach((item) => {
      inputs.push(screen.getByLabelText(`${placeholderFormat(item)}`));
    });

    const submitButton = screen.getByTestId(
      "transaction-form-submit-button"
    ) as HTMLButtonElement;

    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle(
      `background-color: ${theme.palette.background.form}`
    );
    expect(container).toHaveStyle(
      `border-radius: ${theme.shape.borderRadius}px`
    );
    expect(inputs).toHaveLength(Object.keys(inputsObj).length);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("disabled");

    Object.values(inputsObj).forEach((item) => {
      expect(
        screen.getByLabelText(`${placeholderFormat(item)}`)
      ).toBeInTheDocument();
    });

    inputs.forEach((item: HTMLInputElement) => {
      fireEvent.change(item, { target: { value: "12345678" } });
      expect(item.value).toBe("12345678");
    });
  });
});
