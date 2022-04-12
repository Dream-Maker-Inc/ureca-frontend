import { SignupPolicy } from ".";

describe("SignupPolicy Test", () => {
  it("validateEmail test", () => {
    const failedTexts = ["111", "aaa"];
    const successfulText = "asd@gmail.com";

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validateEmail(it)).toBeFalsy()
    );

    expect(SignupPolicy.validateEmail(successfulText)).toBeTruthy();
  });

  it("validatePassword test", () => {
    const failedTexts = ["111", "aaa", "aaa123123"];
    const successfulText = "asd123!!";

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validatePassword(it)).toBeFalsy()
    );

    expect(SignupPolicy.validatePassword(successfulText)).toBeTruthy();
  });

  it("validatePhone test", () => {
    const failedTexts = ["111", "aaa", "aaa123123", "010-asd2-2222"];
    const successfulTexts = ["010-2222-2222", "01022223333"];

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validatePhoneNumber(it)).toBeFalsy()
    );

    successfulTexts.forEach((it) =>
      expect(SignupPolicy.validatePhoneNumber(it)).toBeTruthy()
    );
  });

  it("validateName test", () => {
    const failedTexts = ["123", "홍 길동", "dev kim", "홍길동1"];
    const successfulTexts = ["홍길동", "devkim"];

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validateName(it)).toBeFalsy()
    );

    successfulTexts.forEach((it) =>
      expect(SignupPolicy.validateName(it)).toBeTruthy()
    );
  });

  it("validateSite test", () => {
    const failedTexts = ["123", "홍길동", "dev kim", "www.asd.com"];
    const successfulTexts = ["http://www.asd.com", "https://www.asd.com"];

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validateSite(it)).toBeFalsy()
    );

    successfulTexts.forEach((it) =>
      expect(SignupPolicy.validateSite(it)).toBeTruthy()
    );
  });

  it("validateBusinessNum test", () => {
    const failedTexts = [
      "123",
      "홍길동",
      "www.asd.com",
      "111111111",
      "11-111-11111",
    ];
    const successfulTexts = ["111-11-11111", "012-34-56789"];

    failedTexts.forEach((it) =>
      expect(SignupPolicy.validateBusinessNum(it)).toBeFalsy()
    );

    successfulTexts.forEach((it) =>
      expect(SignupPolicy.validateBusinessNum(it)).toBeTruthy()
    );
  });
});

export {};
