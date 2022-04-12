export interface SignupApiInterface {
  join(): Promise<Boolean>;
  submitCompanyInfo(): Promise<Boolean>;
}
