export const SignupPolicy = {
  validateEmail: (email: string) =>
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      email
    ),

  validatePassword: (pw: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d!@#$%^&*()]{8,20}$/.test(
      pw
    ),

  validatePhoneNumber: (phoneNumber: string) =>
    /^010-?([0-9]{3,4})-?([0-9]{4})$/.test(phoneNumber),

  validateName: (name: string) => /^[가-힣|a-z|A-Z]+$/.test(name),
};
