import { BaseDialog } from "@/common/components/dialogs/BaseDialog";
import { ScreenType } from "@/themes/Limit";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";

export type CorporationRoutePopupProps = {
  popup: {
    open: boolean;
    onClose?: () => void;
  };
  events: {
    onNegative: () => void;
    onPositive: () => void;
  };
};

export const CorporationRoutePopup = ({
  popup,
  events,
}: CorporationRoutePopupProps) => {
  return (
    <BaseDialog open={popup.open} onClose={popup.onClose}>
      <article css={styles.inner}>
        <div css={styles.textSection}>
          <Typography variant={"h6"} color={"text.primary"}>
            기업 회원이세요?
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            기업 정보를 등록하시면 기업 인증 배지가 자동으로 부여되며, 프로젝트
            계약 확률이 높아져요.
          </Typography>
        </div>

        <div css={styles.buttons}>
          <Button variant="outlined" onClick={events.onNegative}>
            아니요, 개인이에요
          </Button>
          <Button variant="contained" onClick={events.onPositive}>
            네, 기업 회원이에요
          </Button>
        </div>
      </article>
    </BaseDialog>
  );
};

const styles = {
  inner: css`
    display: flex;
    flex-direction: column;
    padding: 24px;
    max-width: 480px;
  `,
  textSection: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  buttons: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    gap: 16px;

    @media (max-width: ${ScreenType.sm}px) {
      flex-direction: column;
    }
  `,
};
