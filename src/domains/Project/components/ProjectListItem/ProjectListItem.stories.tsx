import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectListItem } from ".";

const Meta: ComponentMeta<typeof ProjectListItem> = {
  title: "Projects/Project List Item",
  component: ProjectListItem,
};
export default Meta;

export const DeadlineActive: ComponentStory<typeof ProjectListItem> = () => (
  <ProjectListItem
    title={"Android 모바일 앱 개발 및 백엔드 외주"}
    userAvatar={
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png"
    }
    username={"Google"}
    restDeadline={2}
    chipModels={[
      {
        label: "안전거래",
        chipProps: { color: "primary" },
      },
      {
        label: "개발기간 일주일",
      },
      {
        label: "300 ~ 1000 만원",
      },
      {
        label: "경력 5년 이상",
      },
    ]}
  />
);

export const DeadlineInactive: ComponentStory<typeof ProjectListItem> = () => (
  <ProjectListItem
    title={"Micro service AWS Cloud 환경 구축 및 테스트"}
    userAvatar={
      "https://www.coinpress.co.kr/wp-content/uploads/2018/06/microsoft.png"
    }
    username={"MicroSoft"}
    restDeadline={7}
    chipModels={[
      {
        label: "안전거래",
        chipProps: { color: "primary" },
      },
      {
        label: "개발기간 일주일",
      },
      {
        label: "300 ~ 1000 만원",
      },
      {
        label: "경력 5년 이상",
      },
    ]}
  />
);
