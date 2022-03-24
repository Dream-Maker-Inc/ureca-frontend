import { Shape } from "@/themes/Shape";
import { css } from "@emotion/react";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";

import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
  ChipProps,
} from "@mui/material";
import { useProjectCard } from "./useProjectCard";

export type tagsModel = {
  label: string;
  icon: string;
};

export type ProjectCardProps = {
  cardImage: string;
  title: string;
  priceCount: number;
  deadlineCount: number;
  tags: tagsModel[];
};

export const ProjectCard = ({
  cardImage,
  title,
  priceCount,
  deadlineCount,
  tags,
}: ProjectCardProps) => {
  const { price, deadline, onClick } = useProjectCard(
    priceCount,
    deadlineCount
  );

  return (
    <StyledButton onClick={onClick}>
      <article css={styles.inner}>
        <section css={styles.imgContainer}>
          <Image
            src={cardImage}
            alt=""
            layout="fill"
            css={styles.imgWrapper}
          ></Image>
        </section>
        <section css={styles.contentContainer}>
          <Title>{title}</Title>
          <Price>{price.text}</Price>
          <Deadline>{deadline.text}</Deadline>
          <div css={styles.tagsContainer}>
            {tags.map((it, index) => (
              <StyledChip
                key={it.label + index}
                icon={<ApartmentIcon />}
                label={it.label}
              />
            ))}
          </div>
        </section>
      </article>
    </StyledButton>
  );
};

const styles = {
  inner: css`
    width: 260px;
    display: flex;
    flex-direction: column;
    position: "relative";
  `,
  imgContainer: css`
    width: 100%;
    aspect-ratio: 1/1;
  `,

  imgWrapper: css`
    width: 100%;
    aspect-ratio: 1/1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `,
  contentContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px;
  `,
  tagsContainer: css`
    width: 100%;
    display: flex;
    gap: 8px;
  `,
};

const StyledButton = (p: ButtonProps) => (
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
    sx={{ opacity: 0.8, marginBottom: "12px" }}
    {...p}
  />
);

const StyledChip = (p: ChipProps) => (
  <Chip
    size="small"
    sx={{
      padding: "4px",
      fontSize: "8px",
      fontWeight: "700",
    }}
    {...p}
  />
);
