import { css } from "@emotion/react";
import { Button } from "@mui/material";
import Image from "next/image";

export type PortfolioThumbnailProps = {
  onClick: () => void;
  imgUrl: string;
};

export const PortfolioThumbnail = ({
  imgUrl,
  onClick,
}: PortfolioThumbnailProps) => {
  return (
    <section css={styles.card}>
      <Button css={styles.button} onClick={onClick}>
        <div css={styles.inner}>
          <Image css={styles.img} layout="fill" alt={"img"} src={imgUrl} />
        </div>
      </Button>
    </section>
  );
};

const styles = {
  card: css`
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
  `,
  button: css`
    width: 100%;
    height: 100%;
    padding: 0 !important;
    min-width: 0;
  `,
  inner: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;

    overflow: hidden;
  `,
  img: css`
    object-fit: cover;

    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.2);
    }
  `,
};
