import { ScreenType } from "@/themes/Limit";
import { Shape } from "@/themes/Shape";
import { useCustomMediaQuery } from "@/themes/UseCustomMediaQuery";
import { css } from "@emotion/react";
import Dialog, { DialogProps } from "@mui/material/Dialog";

// 팝업 베이스
export const BaseDialog = (p: DialogProps) => {
  const { isSmall } = useCustomMediaQuery();
  return <Dialog css={baseDialogStyle} fullScreen={isSmall} {...p} />;
};

const baseDialogStyle = css`
  & .MuiDialog-paper {
    border-radius: ${Shape.Large};
    width: 100%;
    min-width: 480px;
    max-width: fit-content;
  }

  @media (max-width: ${ScreenType.sm}px) {
    & .MuiDialog-paper {
      border-radius: 0px;
      max-width: 100%;
      min-width: 0;
    }
  }
`;
