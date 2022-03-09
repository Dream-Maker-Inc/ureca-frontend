import { css } from "@emotion/react";
import { Avatar, styled, Typography, TypographyProps } from "@mui/material";

export type PortfolioMetaModel = {
  title: string;
  avatarUrl: string;
  username: string;
};

export interface PortfolioMetaEvents {
  onTitleClick: () => void;
  onUserClick: () => void;
}

export type PortfolioMetaProps = {
  model: PortfolioMetaModel;
  events: PortfolioMetaEvents;
};

export const PortfolioMeta = ({ model, events }: PortfolioMetaProps) => {
  return (
    <section css={styles.root}>
      <Title onClick={events.onTitleClick}>{model.title}</Title>

      <div css={styles.userInfoContainer} onClick={events.onUserClick}>
        <UserAvatar src={model.avatarUrl} />
        <Username>{model.username}</Username>
      </div>
    </section>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
  `,
  userInfoContainer: css`
    display: flex;
    gap: 4px;
    align-items: center;
    width: fit-content;
    cursor: pointer;
  `,
};

const Title = (p: TypographyProps) => (
  <Typography
    variant="subtitle2"
    css={css`
      opacity: 0.9;
      -webkit-line-clamp: 1;
      cursor: pointer;
    `}
    {...p}
  />
);

const UserAvatar = styled(Avatar)`
  width: 16px;
  height: 16px;
  border: 1px solid #eee;
`;

const Username = (p: TypographyProps) => (
  <Typography
    variant={"caption"}
    css={css`
      opacity: 0.7;
    `}
    {...p}
  />
);
