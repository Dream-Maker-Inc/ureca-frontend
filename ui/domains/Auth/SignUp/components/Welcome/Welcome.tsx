import LottieAddUser from "@/ui/animations/lottie/LottieAddUser/LottieAddUser";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export type WelcomeProps = {
  onAnimationComplete: () => void;
};

export const Welcome = ({ onAnimationComplete }: WelcomeProps) => {
  return (
    <article css={styles.root}>
      <div css={styles.inner}>
        <header css={styles.titleContainer}>
          <Typography variant={"h4"} fontWeight={600}>
            {"가입 완료"}
          </Typography>
          <Typography
            variant={"subtitle2"}
            css={css`
              opacity: 0.7;
            `}
          >
            {"유레카를 이용할 준비가 되었어요."}
          </Typography>
        </header>

        <LottieAddUser completeCallback={onAnimationComplete} />
      </div>
    </article>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 48px;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 16px;
  `,
  titleContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  `,
};
