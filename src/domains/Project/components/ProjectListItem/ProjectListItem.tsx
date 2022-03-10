import { Shape } from "@/themes/Shape";
import { css } from "@emotion/react";
import {
  Avatar,
  AvatarProps,
  Button,
  ButtonProps,
  Chip,
  ChipProps,
  Tooltip,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useProjectListItem } from "./useProjectListItem";

export type ProjectListItemChipModel = {
  label: string;
  chipProps?: ChipProps;
};

export type ProjectListItemProps = {
  title: string;
  userAvatar: string;
  username: string;
  restDeadline: number;
  chipModels: ProjectListItemChipModel[];
};

export const ProjectListItem = ({
  title,
  userAvatar,
  username,
  restDeadline,
  chipModels,
}: ProjectListItemProps) => {
  const { deadline, onClick } = useProjectListItem(restDeadline);

  return (
    <RootButton onClick={onClick}>
      <article css={styles.inner}>
        <section css={styles.row1}>
          <div css={styles.clientWrapper}>
            <StyledAvatar src={userAvatar} />
            <UserName>{username}</UserName>
          </div>

          <DeadLine color={deadline.isDanger ? "error.main" : "text.primary"}>
            {deadline.text}
          </DeadLine>
        </section>

        <section>
          <Title>{title}</Title>

          <div css={styles.chipsContainer}>
            {chipModels.map((it, index) => (
              <OptionChip
                key={it.label + index}
                {...it.chipProps}
                label={it.label}
              />
            ))}
          </div>
        </section>
      </article>
    </RootButton>
  );
};

const styles = {
  inner: css`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
    width: 100%;
  `,
  row1: css`
    display: flex;
    justify-content: space-between;
  `,
  clientWrapper: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  chipsContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
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
    }}
    {...p}
  />
);

const StyledAvatar = (p: AvatarProps) => (
  <Avatar
    sx={{ width: "24px", height: "24px", border: "1px solid #eee" }}
    {...p}
  />
);

const UserName = (p: TypographyProps) => (
  <Typography
    variant={"caption"}
    color={"text.primary"}
    fontWeight={700}
    sx={{ opacity: 0.7 }}
    {...p}
  />
);

const Title = (p: TypographyProps) => (
  <Typography
    variant="subtitle1"
    color={"text.secondary"}
    fontWeight={700}
    {...p}
  />
);

const DeadLine = (p: TypographyProps) => (
  <Typography
    variant={"caption"}
    color={"text.primary"}
    sx={{ opacity: 0.7 }}
    {...p}
  />
);

const OptionChip = (p: ChipProps) => (
  <Chip
    variant={"outlined"}
    size={"small"}
    sx={{
      cursor: "pointer",
      opacity: 0.8,
      fontWeight: 300,
    }}
    {...p}
  />
);
