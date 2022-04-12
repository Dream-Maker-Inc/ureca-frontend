import { renderHook, act } from "@testing-library/react-hooks";
import { useTestHook } from ".";

describe("jest react hook test", () => {
  it("toggle test", () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.state).toBe(false);

    act(() => result.current.toggle());
    expect(result.current.state).toBe(true);
  });
});

export {};
