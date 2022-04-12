import { css } from "@emotion/react";
import {
  Stack,
  Avatar,
  AvatarProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export type ProjectListItemProps = {
  avatarImage: string;
  brandNameText: string;
  projectIndex: string;
  projectTitle: string;
  projectDate: string;
  projectPrice: string;
  prkjecctStatus: string;
};

export const ProjectListItem = ({
  avatarImage,
  brandNameText,
  projectIndex,
  projectTitle,
  projectDate,
  projectPrice,
  prkjecctStatus,
}: ProjectListItemProps) => {
  return (
    <article css={styles.root}>
      <div css={styles.inner}>
        <dl css={styles.avatarContainer}>
          <BrandAvatar src={avatarImage} />
          <BrandName>{brandNameText}</BrandName>
        </dl>
        <dl css={styles.contentContainer}>
          <ProjectIndex>#{projectIndex}</ProjectIndex>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <ProjectDate>거래일 : {projectDate}</ProjectDate>
        </dl>
        <div css={styles.priceContainer}>
          <ProjectStatus>{prkjecctStatus}</ProjectStatus>
          <ProjectPrice>{projectPrice}</ProjectPrice>
        </div>
      </div>
    </article>
  );
};

const styles = {
  root: css`
    max-width: 960px;
    aspect-ratio: 8/1;
    padding: 22px 33px;
    border-bottom: 2px solid #eee;
  `,
  inner: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  `,
  avatarContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  `,
  contentContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  `,
  priceContainer: css`
    display: flex;
    flex-direction: column;
    align-items: end;
  `,
};

const BrandAvatar = (p: AvatarProps) => (
  <Avatar alt="Brand Logo" sx={{ width: "60px", height: "60px" }} {...p} />
);

const BrandName = (p: TypographyProps) => (
  <Typography
    variant={"subtitle2"}
    fontWeight={700}
    sx={{ opacity: 0.4, lineHeight: 1 }}
    noWrap
    {...p}
  />
);

const ProjectIndex = (p: TypographyProps) => (
  <Typography
    variant={"subtitle2"}
    fontWeight={500}
    sx={{ opacity: 0.6, lineHeight: 1 }}
    {...p}
  />
);

const ProjectTitle = (p: TypographyProps) => (
  <Typography
    variant={"body1"}
    fontWeight={600}
    sx={{ opacity: 0.7, lineHeight: 1 }}
    {...p}
  />
);

const ProjectDate = (p: TypographyProps) => (
  <Typography
    variant={"body2"}
    fontWeight={500}
    sx={{ opacity: 0.6, lineHeight: 1 }}
    {...p}
  />
);

const ProjectStatus = (p: TypographyProps) => (
  <Typography
    variant={"subtitle2"}
    color={"primary"}
    sx={{ opacity: 0.8 }}
    {...p}
  />
);

const ProjectPrice = (p: TypographyProps) => (
  <Typography variant={"body2"} fontWeight={700} noWrap {...p} />
);
