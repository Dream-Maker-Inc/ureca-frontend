import { Timer } from "@/ui/components/misc/Timer";
import { css } from "@emotion/react";
import { Button, ButtonProps, Tooltip, Typography } from "@mui/material";
import { VerifyCodeInputs } from "../VerifyCodeInputs";
import { useVerifyPhoneCode } from "./useVerifyPhoneCode";

export type VerifyPhoneCodeProps = {
  onSubmit: () => void;
};

export const VerifyPhoneCode = ({ onSubmit }: VerifyPhoneCodeProps) => {
  const { timerState, verifyState, onHelp, onRetry } =
    useVerifyPhoneCode(onSubmit);

  const {
    error: { isError: verifyError, text: verifyErrorText },
  } = verifyState;

  return (
    <article css={styles.root}>
      <header css={styles.titleContainer}>
        <Typography variant={"h4"} fontWeight={600}>
          {"휴대폰 인증"}
        </Typography>

        <Typography
          variant={"subtitle2"}
          css={css`
            opacity: 0.7;
          `}
        >
          {"인증번호를 받을 휴대폰 번호를 입력해주세요."}
        </Typography>
      </header>

      <form css={styles.form}>
        <VerifyCodeInputs
          code={verifyState.value}
          setCode={verifyState.setValue}
          textFieldProps={{ error: verifyError }}
        />

        <div aria-label="타이머 에러" css={styles.inputOptions}>
          {verifyError && (
            <Typography variant={"caption"} color={"warning.main"}>
              {verifyErrorText}
            </Typography>
          )}

          {!timerState.timeOver && (
            <div aria-label={"타이머"} css={styles.timerWrapper}>
              <Timer
                time={timerState.value}
                setTime={timerState.setValue}
                errorColor={"warning.main"}
              />
            </div>
          )}
          {timerState.timeOver && <RetryBtn onClick={onRetry} />}
        </div>
      </form>

      <section css={styles.helpSection}>
        <HelpBtn onClick={onHelp} />
      </section>
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
  titleContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 8px;
    margin-top: 48px;
  `,
  inputOptions: css`
    display: flex;
    justify-content: space-between;
    padding: 2px;
  `,
  timerWrapper: css`
    display: flex;
    flex-direction: column;
    padding: 0 2px;
  `,
  helpSection: css`
    display: flex;
    align-items: center;
    margin-top: 48px;
  `,
};

const HelpBtn = (p: ButtonProps) => (
  <Tooltip title={"도움말"}>
    <Button color={"inherit"} {...p}>
      <Typography
        variant={"caption"}
        css={css`
          opacity: 0.6;
        `}
      >
        {"인증 문제가 발생하시나요?"}
      </Typography>
    </Button>
  </Tooltip>
);

const RetryBtn = (p: ButtonProps) => (
  <Button
    aria-label={"다시 받기 버튼"}
    css={css`
      padding: 0;
      min-width: 0;
    `}
    {...p}
  >
    <Typography variant={"caption"}>{"다시 받기"}</Typography>
  </Button>
);
