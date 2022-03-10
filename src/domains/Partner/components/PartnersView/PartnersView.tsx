import { TitleWithDesc } from "@/common/components/TitleWithDesc";
import { verticalScrollable } from "@/common/styles/Scrollable";
import { css } from "@emotion/react";
import { PartnerListItem } from "../PartnerListItem";
import { usePartnersView } from "./usePartnersView";

export const PartnersView = () => {
  const { partnersData } = usePartnersView();

  return (
    <main css={styles.root}>
      <section css={styles.contentSection}>
        <header css={styles.contentHeader}>
          <TitleWithDesc
            title={"파트너 찾기"}
            desc={"새로운 파트너를 찾아보세요."}
          />
        </header>

        <section css={styles.listContainer}>
          {partnersData.map((it, index) => (
            <PartnerListItem key={it.username + index} {...it} />
          ))}
        </section>
      </section>
    </main>
  );
};

const styles = {
  root: css`
    ${verticalScrollable}
    display: flex;
    width: 100%;
    height: 100%;
  `,
  contentSection: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px;
  `,
  contentHeader: css`
    margin-top: 16px;
    margin-bottom: 32px;
  `,
  listContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 8px;
  `,
};
