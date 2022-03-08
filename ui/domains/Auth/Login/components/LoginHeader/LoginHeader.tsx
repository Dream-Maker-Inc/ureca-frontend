import { Logo } from "@/ui/components/logo/Ureca/Logo";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

export const LoginHeader = () => {
  return (
    <header css={root}>
      <div css={logoWrapper}>
        <Logo />
      </div>

      <Typography variant={"subtitle2"}>
        {"로그인 후 모든 기능을 이용해보세요!"}
      </Typography>
    </header>
  );
};

const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const logoWrapper = css`
  position: relative;
  width: 120px;
  aspect-ratio: 4/2;
`;
