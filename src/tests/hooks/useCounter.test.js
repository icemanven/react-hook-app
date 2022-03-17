import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("test useCounter Hook", () => {
  test("should return default values", () => {
    const {
      result: {
        current: { counter, increment, decrement, reset },
      },
    } = renderHook(() => useCounter());

    expect(counter).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should counter be 100", () => {
    const {
      result: {
        current: { counter },
      },
    } = renderHook(() => useCounter(100));
    expect(counter).toBe(100);
  });

  test("should increment in 1", () => {
    const {result} = renderHook(() => useCounter(100));

    const {increment} = result.current;

    act(() => {
      increment();
    });

    const {counter} = result.current;

    expect(counter).toBe(101);
  });

  test("should decrement in 1", () => {
    const {result} = renderHook(() => useCounter(100));

    const {decrement} = result.current;

    act(() => {
      decrement();
    });

    const {counter} = result.current;

    expect(counter).toBe(99);
  });

  test("should reset to initial value", () => {
    const {result} = renderHook(() => useCounter(100));

    const {increment, reset} = result.current;

    act(() => {
      increment();
      reset();
    });

    const {counter} = result.current;

    expect(counter).toBe(100);
  });
});
