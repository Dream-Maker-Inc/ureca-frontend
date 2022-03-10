import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import {
  AppBar,
  AppBarProps,
  ButtonProps,
  IconButton,
  Toolbar,
} from "@mui/material";
import { ReactNode } from "react";

export type MobileAppbarTemplateProps = {
  title: ReactNode;
  right: ReactNode;
  onBack: () => void;
  appbarProps?: AppBarProps;
};

export const MobileAppbarTemplate = ({
  title,
  right,
  onBack,
  appbarProps,
}: MobileAppbarTemplateProps) => {
  return (
    <BaseAppbar {...appbarProps}>
      <BaseToolbar>
        <section css={styles.left}>
          <BackButton onClick={onBack} />

          {title}
        </section>

        <section css={styles.right}>{right}</section>
      </BaseToolbar>
    </BaseAppbar>
  );
};

const styles = {
  left: css`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 8px;
  `,
  right: css`
    display: flex;
    height: fit-content;
    align-items: center;
  `,
};

const BaseAppbar = (p: AppBarProps) => (
  <AppBar position="relative" color="transparent" elevation={0} {...p} />
);

const BaseToolbar = styled(Toolbar)`
  border-bottom: 1px solid #eee;
  justify-content: space-between;
`;

const BackButton = (p: ButtonProps) => (
  <IconButton edge={"start"} {...p}>
    <ArrowBackRounded />
  </IconButton>
);
