import { DreamMakerLogo } from "@/common/components/logo/DreamakerLogo";
import {
  CustomSwiper,
  CustomSwiperSlide,
} from "@/common/components/swipers/CustomSwiper/CustomSwiper";
import { useAuthMainView } from "@/domains/Auth/Main/components/AuthMainView/useAuthMainView";
import { LoginSwiperItem } from "@/domains/Auth/Login";
import { LoginSection } from "@/domains/Auth/Login/components/LoginSection";
import { SignupSection } from "@/domains/Auth/SignUp";
import { AuthScene } from "@/domains/Auth/Main/types/AuthScene.type";
import { verticalScrollable } from "@/common/styles/Scrollable";
import { LightColor } from "@/themes/Color";
import { ScreenType } from "@/themes/Limit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import SwiperCore, { Autoplay, Pagination } from "swiper";

export const AuthMainView = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const { loginSwiperItems, authSceneState } = useAuthMainView();

  return (
    <main css={styles.main}>
      <MainCard>
        <div css={styles.cardInner}>
          <section css={styles.left}>
            <div css={styles.logoWrapper}>
              <DreamMakerLogo fontSize="small" />
            </div>

            <StyledSwiper
              loop
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
            >
              {loginSwiperItems.map((it) => (
                <CustomSwiperSlide key={it.title}>
                  <LoginSwiperItem key={it.title + it.subtitle} {...it} />
                </CustomSwiperSlide>
              ))}
            </StyledSwiper>
          </section>

          <section css={styles.right}>
            {authSceneState.value === AuthScene.Login && (
              <LoginSection
                formProps={{
                  onSignup: () => authSceneState.onChange(AuthScene.Signup),
                }}
              />
            )}

            {authSceneState.value === AuthScene.Signup && (
              <SignupSection
                onBack={() => authSceneState.onChange(AuthScene.Login)}
              />
            )}
          </section>
        </div>
      </MainCard>
    </main>
  );
};

const styles = {
  main: css`
    ${verticalScrollable}
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 24px;
    background-color: ${LightColor.PrimaryBright};

    min-width: ${ScreenType.xl}px;
  `,
  cardInner: css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  `,

  left: css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${LightColor.Primary};
  `,
  logoWrapper: css`
    display: flex;
    position: absolute;
    margin: 12px;
  `,

  right: css`
    ${verticalScrollable}
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
};

const StyledSwiper = styled(CustomSwiper)`
  height: 100%;

  & .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    padding-left: 8px;
    padding-bottom: 8px;
  }

  & .swiper-pagination-bullet-active {
    background: #fff;
  }
`;

const MainCard = (p: CardProps) => (
  <Card
    component={"article"}
    css={css`
      width: 100%;
      max-width: 1024px;
      height: 600px;
      margin: auto;
    `}
    raised
    {...p}
  />
);
