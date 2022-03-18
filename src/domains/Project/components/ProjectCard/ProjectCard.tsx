import { Shape } from "@/themes/Shape";
import { css } from "@emotion/react";
import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useProjectCard } from "./useProjectCard";

export type ProjectCardProps = {
  cardImage: string;
  title: string;
  priceCount: number;
  deadlineCount: number;
};

export const ProjectCard = ({
  cardImage,
  title,
  priceCount,
  deadlineCount,
}: ProjectCardProps) => {
  const { price, deadline, onClick } = useProjectCard(
    priceCount,
    deadlineCount
  );
  return (
    <RootButton onClick={onClick}>
      <article css={styles.inner}>
        <section css={styles.imgContainer}>
          <img src={cardImage} alt="" css={styles.imgWrapper}></img>
        </section>
        <section css={styles.contentContainer}>
          <Title>{title}</Title>
          <Price>{price.text}</Price>
          <Deadline>{deadline.text}</Deadline>
          <div css={styles.tagsContainer}></div>
        </section>
      </article>
    </RootButton>
  );
};

const styles = {
  inner: css`
    width: 260px;
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
  `,
  imgContainer: css`
    width: 100%;
    height: 65%;
  `,

  imgWrapper: css`
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `,
  contentContainer: css`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
  `,
  tagsContainer: css`
    width: 100%;
    display: flex;
    gap: 8px;
  `,
};

const RootButton = (p: ButtonProps) => (
  <Button
    sx={{
      padding: 0,
      minWidth: 0,
      textAlign: "start",
      borderRadius: Shape.Medium,
      border: "1px solid #eee",
      boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.5);",
    }}
    {...p}
  />
);

const Title = (p: TypographyProps) => (
  <Typography
    variant={"subtitle2"}
    color={"text.secondary"}
    sx={{ opacity: 0.9 }}
    {...p}
  />
);
const Price = (p: TypographyProps) => (
  <Typography
    variant={"caption"}
    color={"text.primary"}
    fontWeight={700}
    sx={{ opacity: 0.8 }}
    {...p}
  />
);
const Deadline = (p: TypographyProps) => (
  <Typography
    variant={"caption"}
    color={"text.primary"}
    fontWeight={700}
    sx={{ opacity: 0.8 }}
    {...p}
  />
);
