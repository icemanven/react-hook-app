import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("pruebas en <useForm />", () => {
  const initialForm = {
    name: "fernando",
    email: "fernando@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const {
      result: {
        current: [values, hadleInputChange, resetForm],
      },
    } = renderHook(() => useForm(initialForm));

    expect(values).toEqual(initialForm);
    expect(typeof hadleInputChange).toBe("function");
    expect(typeof resetForm).toBe("function");
  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Carlos";
    const [, hadleInputChange] = result.current;
    act(() => {
      hadleInputChange({ target: { name: "name", value: newName } });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: newName});
  });

  test("debe de restablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Carlos";
    const [, hadleInputChange, resetForm] = result.current;
    act(() => {
      hadleInputChange({ target: { name: "name", value: newName } });
      resetForm();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
