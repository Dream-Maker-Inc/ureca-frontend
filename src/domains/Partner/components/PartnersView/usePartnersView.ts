import { PartnerListItemProps } from "../PartnerListItem/PartnerListItem";

export const usePartnersView = () => {
  return { partnersData };
};

const partnersData: PartnerListItemProps[] = [
  {
    userAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png",
    username: "Google",
    partnerType: "corporate",
    chipModels: [
      {
        label: "포트폴리오 3개",
      },
      {
        label: "계약 수 3개",
      },
      {
        label: "누적 금액 70,300만원",
      },
    ],
  },
  {
    userAvatar:
      "https://contents.sixshop.com/thumbnails/uploadedFiles/25109/product/image_1541385514173_750.jpg",
    username: "Apple",
    partnerType: "corporate",
    chipModels: [
      {
        label: "포트폴리오 3개",
      },
      {
        label: "계약 수 3개",
      },
      {
        label: "누적 금액 70,300만원",
      },
    ],
  },
  {
    userAvatar:
      "https://www.coinpress.co.kr/wp-content/uploads/2018/06/microsoft.png",
    username: "MicroSoft",
    partnerType: "private",
    chipModels: [
      {
        label: "포트폴리오 3개",
      },
      {
        label: "계약 수 3개",
      },
      {
        label: "누적 금액 70,300만원",
      },
    ],
  },
];
