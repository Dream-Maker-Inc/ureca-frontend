import DreamMakerLogo from "@/ui/components/logo/Dreamaker/DreamMakerLogo";
import {
  CustomSwiper,
  CustomSwiperSlide,
} from "@/ui/components/swipers/CustomSwiper/CustomSwiper";
import { useAuthPage } from "@/ui/domains/Auth/hooks/useAuthPage";
import {
  LoginForm,
  LoginHeader,
  LoginSwiperItem,
} from "@/ui/domains/Auth/Login";
import { verticalScrollable } from "@/ui/styles/Scrollable";
import { LightColor } from "@/ui/themes/Color";
import { ScreenType } from "@/ui/themes/Limit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import { NextPage } from "next";
import SwiperCore, { Autoplay, Pagination } from "swiper";

const AuthPage: NextPage = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const { loginSwiperItems } = useAuthPage();

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
            <div css={styles.loginWrapper}>
              <LoginHeader />
              <LoginForm />
            </div>
          </section>
        </div>
      </MainCard>
    </main>
  );
};

export default AuthPage;

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
  loginWrapper: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    align-items: center;
    padding: 16px;
    gap: 48px;
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
