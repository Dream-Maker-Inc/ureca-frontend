import { SignupApiInterface } from "./SignupApi.interface";

class SignupApi implements SignupApiInterface {
  private static instance: SignupApi;
  static get Instance(): SignupApi {
    return this.instance || (this.instance = new this());
  }

  async join(): Promise<Boolean> {
    return await true;
  }

  async submitCompanyInfo(): Promise<Boolean> {
    return await true;
  }
}

export default SignupApi.Instance;
