import { act, renderHook } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";
import { useBasicForm } from "./useBasicForm";

describe("useBasicForm test", () => {
  it("login state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const { loginState } = result.current;

    expect(loginState.value).toBe("");
    expect(loginState.helper.color).toBe("primary");

    act(() => loginState.onChange("asd"));
    const { loginState: changedLoginState } = result.current;

    expect(changedLoginState.value).toBe("asd");
    expect(changedLoginState.helper.color).toBe("primary");
  });
});

export {};
