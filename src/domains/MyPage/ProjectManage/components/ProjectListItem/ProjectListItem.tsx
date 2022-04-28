import { css } from "@emotion/react";
import {
  Stack,
  Avatar,
  AvatarProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export type ProjectListItemProps = {
  avatar: {
    imgUrl: string;
    brandName: string;
  };
  project: {
    id: string;
    title: string;
    transactionDate: string;
    price: string;
    state: string;
  };
};

export const ProjectListItem = ({ avatar, project }: ProjectListItemProps) => {
  return (
    <article css={styles.root}>
      <div css={styles.inner}>
        <div css={styles.avatarContainer}>
          <BrandAvatar src={avatar.imgUrl} />
          <BrandName>{avatar.brandName}</BrandName>
        </div>
        <dl css={styles.contentContainer}>
          <ProjectIndex>#{project.id}</ProjectIndex>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDate>거래일 : {project.transactionDate}</ProjectDate>
        </dl>
        <div css={styles.priceContainer}>
          <ProjectStatus>{project.state}</ProjectStatus>
          <ProjectPrice>{project.price}</ProjectPrice>
        </div>
      </div>
    </article>
  );
};

const styles = {
  root: css`
    width: 100%;
    min-height: 130px;
    padding: 22px 33px;
    border-bottom: 2px solid #eee;
    display: flex;
    align-items: center;
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
    gap: 2px;
  `,
};

const BrandAvatar = (p: AvatarProps) => (
  <Avatar alt="Brand Logo" sx={{ width: "60px", height: "60px" }} {...p} />
);

const BrandName = (p: TypographyProps) => (
  <Typography
    variant={"subtitle2"}
    fontWeight={300}
    sx={{ opacity: 0.4, lineHeight: 1 }}
    noWrap
    {...p}
  />
);

const ProjectIndex = (p: TypographyProps) => (
  <Typography
    variant={"body2"}
    component={"dd"}
    sx={{ opacity: 0.5, lineHeight: 1 }}
    {...p}
  />
);

const ProjectTitle = (p: TypographyProps) => (
  <Typography
    variant={"body1"}
    component={"dt"}
    fontWeight={300}
    sx={{
      opacity: 0.7,
      lineHeight: 1.4,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
    }}
    {...p}
  />
);

const ProjectDate = (p: TypographyProps) => (
  <Typography
    variant={"body2"}
    component={"dd"}
    sx={{ opacity: 0.5, lineHeight: 1 }}
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
