export const partnerType = {
  private: "private",
  corporate: "corporate",
} as const;

export type PartnerType = typeof partnerType[keyof typeof partnerType];
