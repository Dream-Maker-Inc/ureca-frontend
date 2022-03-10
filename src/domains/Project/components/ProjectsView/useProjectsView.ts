import { ProjectListItemProps } from "../ProjectListItem";

export const useProjectsView = () => {
  return {
    projects: projectsData,
  };
};

const projectsData: ProjectListItemProps[] = [
  {
    title: "Android 모바일 앱 개발 및 백엔드 외주",
    userAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png",
    username: "Google",
    restDeadline: 2,
    chipModels: [
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
    ],
  },
  {
    title: "SwiftUi 기반 iOS 모바일 앱 개발",
    userAvatar:
      "https://contents.sixshop.com/thumbnails/uploadedFiles/25109/product/image_1541385514173_750.jpg",
    username: "Apple",
    restDeadline: 3,
    chipModels: [
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
    ],
  },
  {
    title: "Micro service AWS Cloud 환경 구축 및 테스트",
    userAvatar:
      "https://www.coinpress.co.kr/wp-content/uploads/2018/06/microsoft.png",
    username: "MicroSoft",
    restDeadline: 7,
    chipModels: [
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
    ],
  },
];
