import { css } from "@emotion/react";
import { PortfolioMeta, PortfolioMetaProps } from "./PortfolioMeta";
import {
  PortfolioThumbnail,
  PortfolioThumbnailProps,
} from "./PortfolioThumbnail";

export type PortfolioCardType = {
  thumbnailProps: PortfolioThumbnailProps;
  metaProps: PortfolioMetaProps;
};

export const PortfolioCard = ({
  thumbnailProps,
  metaProps,
}: PortfolioCardType) => {
  return (
    <article css={styles.root}>
      <PortfolioThumbnail {...thumbnailProps} />
      <PortfolioMeta {...metaProps} />
    </article>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
};
