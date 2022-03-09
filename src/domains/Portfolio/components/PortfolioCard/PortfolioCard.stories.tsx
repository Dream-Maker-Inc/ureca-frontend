import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PortfolioCard } from ".";

const Meta: ComponentMeta<typeof PortfolioCard> = {
  title: "Portfolio/Portfolio Card",
  component: PortfolioCard,
};
export default Meta;

export const Basic: ComponentStory<typeof PortfolioCard> = () => (
  <div style={{ width: "240px" }}>
    <PortfolioCard
      thumbnailProps={{
        onClick: () => alert("onClick"),
        imgUrl: "/images/temp/portfolio1.jpg",
      }}
      metaProps={{
        model: {
          title: "베이직 카드 타이틀",
          avatarUrl:
            "https://contents.sixshop.com/thumbnails/uploadedFiles/25109/product/image_1541385514173_750.jpg",
          username: "유저명1",
        },
        events: {
          onTitleClick: () => alert("onTitle"),
          onUserClick: () => alert("onUser"),
        },
      }}
    />
  </div>
);
