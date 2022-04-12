export const companyType = {
  private: "private",
  corporate: "corporate",
};
export type CompanyType = typeof companyType[keyof typeof companyType];
