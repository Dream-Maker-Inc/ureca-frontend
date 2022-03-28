import { CompanyType } from "@/common/policies/Partner/Company.type";

export type CompanyInfoFormModel = {
  brandName: string;
  companyType: CompanyType;
  brn: string;
  ownerName: string;
  contactNumber: string;
  homepage: string;
  email: string;
};
