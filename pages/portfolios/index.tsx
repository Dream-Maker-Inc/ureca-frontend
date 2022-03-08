import { TitleWithDesc } from "@/ui/components/TitleWithDesc";
import { PortfolioCard } from "@/ui/domains/Portfolio/components/PortfolioCard";
import { PortfolioMobileAppbar } from "@/ui/domains/Portfolio/components/PortfolioMobileAppbar";
import { usePortfoliosPage } from "@/ui/domains/Portfolio/hooks/usePortfoliosPage";
import { verticalScrollable } from "@/ui/styles/Scrollable";
import { css } from "@emotion/react";
import { Grid, GridProps } from "@mui/material";
import { NextPage } from "next";

const PortfoliosPage: NextPage = () => {
  const { portfolios, events } = usePortfoliosPage();

  return (
    <main css={styles.root}>
      <PortfolioMobileAppbar
        onBack={events.onBack}
        onSearch={events.onSearch}
      />

      <section css={styles.contentSection}>
        <div css={styles.titleWrapper}>
          <TitleWithDesc
            title={"포트폴리오 찾기"}
            desc={"파트너의 포트폴리오를 찾아보세요."}
          />
        </div>

        <GridContainer>
          {portfolios.map((it, index) => (
            <GridItem key={it.title + index}>
              <PortfolioCard
                thumbnailProps={{
                  imgUrl: it.thumbnail,
                  onClick: events.onPortfolio,
                }}
                metaProps={{
                  model: {
                    title: it.title,
                    avatarUrl: it.userAvatar,
                    username: it.username,
                  },
                  events: {
                    onTitleClick: events.onPortfolio,
                    onUserClick: events.onUser,
                  },
                }}
              />
            </GridItem>
          ))}
        </GridContainer>
      </section>
    </main>
  );
};

export default PortfoliosPage;

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  contentSection: css`
    ${verticalScrollable}
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 16px;
  `,
  titleWrapper: css`
    margin-top: 16px;
    margin-bottom: 32px;
  `,
};

const GridContainer = (p: GridProps) => (
  <Grid container spacing={2} rowGap={2} {...p} />
);

const GridItem = (p: GridProps) => <Grid item xs={6} md={3} {...p} />;
