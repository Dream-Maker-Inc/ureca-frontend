import { useRouter } from "next/router";

export const usePortfoliosPage = () => {
  const router = useRouter();

  const handleFilterClick = () => {};
  const handlePortfolioClick = () => {};
  const handleUserClick = () => {};
  const handleRouteMain = () => {};
  const handleSearchSubmit = (keyword: string) => alert(keyword);
  const handleBack = () => router.back();

  return {
    portfolios,
    events: {
      onFilter: handleFilterClick,
      onPortfolio: handlePortfolioClick,
      onUser: handleUserClick,
      onRouteMain: handleRouteMain,
      onSearch: handleSearchSubmit,
      onBack: handleBack,
    },
  };
};

// mock data
const portfolios = Array.from({ length: 3 })
  .map(() => [
    {
      title: "오늘의 집 메인 프레임 작업",
      userAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png",
      username: "Google",
      thumbnail: "/images/temp/portfolio1.jpg",
    },
    {
      title: "Snobs 웹앱 개발",
      userAvatar:
        "https://contents.sixshop.com/thumbnails/uploadedFiles/25109/product/image_1541385514173_750.jpg",
      username: "Apple",
      thumbnail: "/images/temp/portfolio2.png",
    },
    {
      title: "Smeme 플랫폼 웹앱 개발",
      userAvatar:
        "https://www.coinpress.co.kr/wp-content/uploads/2018/06/microsoft.png",
      username: "MicroSoft",
      thumbnail: "/images/temp/portfolio3.jpg",
    },
  ])
  .flat();
