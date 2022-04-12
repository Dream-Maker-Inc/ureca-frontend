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

  it("pw state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const getPwState = () => result.current.pwState;
    const getPwConfirmState = () => result.current.pwConfirmState;

    expect(getPwState().value).toBe("");
    expect(getPwConfirmState().value).toBe("");

    act(() => getPwState().onChange("asd"));
    expect(getPwState().helper.color).toBe("error");

    act(() => getPwState().onChange("asd123!!"));
    expect(getPwState().helper.color).toBe("primary");

    act(() => getPwConfirmState().onChange("asd"));
    expect(getPwConfirmState().helper.color).toBe("error");

    act(() => getPwConfirmState().onChange("asd123!!"));
    expect(getPwConfirmState().helper.color).toBe("primary");
  });

  it("username state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const getUsernameState = () => result.current.usernameState;

    expect(getUsernameState().value).toBe("");

    act(() => getUsernameState().onChange("asd"));
    expect(getUsernameState().value).toBe("asd");
  });

  it("phone state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const getPhoneState = () => result.current.phoneState;

    expect(getPhoneState().value).toBe("");

    act(() => getPhoneState().onChange("asd"));
    expect(getPhoneState().value).toBe("asd");
  });

  it("verified-phone state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const getVerifiedPhoneState = () => result.current.verifiedPhoneState;

    expect(getVerifiedPhoneState().value).toBe(false);

    act(() => getVerifiedPhoneState().onChange(true));
    expect(getVerifiedPhoneState().value).toBe(true);
  });

  it("email state change test", () => {
    const { result } = renderHook(() => useBasicForm(), {
      wrapper: RecoilRoot,
    });

    const getEmailState = () => result.current.emailState;

    expect(getEmailState().value).toBe("");

    act(() => getEmailState().onChange("asd"));
    expect(getEmailState().helper.color).toBe("error");

    act(() => getEmailState().onChange("asd@gmail.com"));
    expect(getEmailState().value).toBe("asd@gmail.com");
    expect(getEmailState().helper.color).toBe("primary");
  });
});

export {};
