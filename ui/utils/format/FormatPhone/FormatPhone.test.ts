import { formatToPhoneNumber } from "./FormatPhone";

describe("test formatToPhoneNumber", () => {
  it("01012345678 will change 010 1234 5678", () => {
    expect(formatToPhoneNumber("01012345678")).toBe("010 1234 5678");
  });

  it("empty value not change", () => {
    expect(formatToPhoneNumber("")).toBe("");
  });

  it("value under the maxLength, doesn't change", () => {
    expect(formatToPhoneNumber("010")).toBe("010");
  });

  it("value over the maxLength, value was cut maxLength", () => {
    expect(formatToPhoneNumber("010123456789")).toBe("01012345678");
  });
});

export {};
