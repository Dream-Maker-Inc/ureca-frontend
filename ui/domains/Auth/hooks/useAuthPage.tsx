import CertificationIcon from "@/ui/components/icons/CertificationIcon";
import InternetIcon from "@/ui/components/icons/InternetIcon";
import { LockRounded } from "@mui/icons-material";
import { useState } from "react";
import { LoginSwiperItemProps } from "../Login/components/LoginSwiperItem";
import { AuthScene } from "../types/AuthScene.type";

export const useAuthPage = () => {
  const loginSwiperItems: LoginSwiperItemProps[] = [
    {
      icon: (
        <LockRounded color={"primary"} sx={{ width: "3rem", height: "3rem" }} />
      ),
      title: "계약금 걱정 없는",
      subtitle: "에스크로 안전결제",
    },
    {
      icon: (
        <InternetIcon
          color={"primary"}
          sx={{ width: "3rem", height: "3rem" }}
        />
      ),
      title: "업계 최초 100% 온라인",
      subtitle: "카드결제, 전자계약",
    },
    {
      icon: (
        <CertificationIcon
          color={"primary"}
          sx={{ width: "3rem", height: "3rem" }}
        />
      ),
      title: "프로젝트 신뢰를 높이는",
      subtitle: "최소 계약 금액 보장",
    },
  ];

  const [authScene, setAuthScene] = useState<AuthScene>(AuthScene.Login);
  const handleChangeScene = (scene: AuthScene) => setAuthScene(scene);

  return {
    loginSwiperItems,
    authSceneState: {
      value: authScene,
      onChange: handleChangeScene,
    },
  };
};
