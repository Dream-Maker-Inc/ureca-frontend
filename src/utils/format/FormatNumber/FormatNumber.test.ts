import { toDoubleDigits } from "./FormatNumber";

describe("test toDoubleDigits", () => {
  it("1 will change '01'", () => {
    expect(toDoubleDigits(1)).toBe("01");
  });

  it("-1 will change '01'", () => {
    expect(toDoubleDigits(-1)).toBe("01");
  });

  it("value over two bit, not change", () => {
    expect(toDoubleDigits(100)).toBe("100");
    expect(toDoubleDigits(-100)).toBe("100");
  });
});

export {};
