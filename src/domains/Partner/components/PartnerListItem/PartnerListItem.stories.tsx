import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PartnerListItem } from ".";

const Meta: ComponentMeta<typeof PartnerListItem> = {
  title: "Partners/Partner List Item",
  component: PartnerListItem,
};
export default Meta;

export const CorporatedCard: ComponentStory<typeof PartnerListItem> = () => (
  <PartnerListItem
    userAvatar={
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png"
    }
    username={"Google"}
    partnerType={"corporate"}
    chipModels={[
      {
        label: "포트폴리오 3개",
      },
      {
        label: "계약 수 3개",
      },
      {
        label: "누적 금액 70,300만원",
      },
    ]}
  />
);

export const NotCorporatedCard: ComponentStory<typeof PartnerListItem> = () => (
  <PartnerListItem
    userAvatar={
      "https://www.coinpress.co.kr/wp-content/uploads/2018/06/microsoft.png"
    }
    username={"MicroSoft"}
    partnerType={"private"}
    chipModels={[
      {
        label: "포트폴리오 3개",
      },
      {
        label: "계약 수 3개",
      },
      {
        label: "누적 금액 70,300만원",
      },
    ]}
  />
);
