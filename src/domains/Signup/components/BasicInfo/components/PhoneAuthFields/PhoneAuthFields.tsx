import { Timer } from "@/common/components/misc/Timer";
import { css } from "@emotion/react";
import {
  Button,
  ButtonProps,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";
import { FieldHeader } from "../FieldHeader";
import { usePhoneAuthFields } from "./usePhoneAuthFields";

export const PhoneAuthFields = () => {
  const { phoneState, verifyCodeState } = usePhoneAuthFields();

  return (
    <section css={styles.formFieldContainer}>
      <div css={styles.formFieldWrapper}>
        <FieldHeader
          title={"휴대폰 본인 인증"}
          description={"휴대폰 번호를 입력하신 후 인증 번호로 인증해 주세요."}
          requirement
        />

        <div css={styles.phoneAuthContainer}>
          <TextField
            fullWidth
            placeholder="휴대폰 번호를 입력하세요."
            disabled={phoneState.disabled}
            value={phoneState.value}
            onChange={phoneState.onChange}
            helperText={
              <SmallCaption
                color={phoneState.helper.error ? "error" : "primary"}
              >
                {phoneState.helper.visible && phoneState.helper.text}
              </SmallCaption>
            }
          />
          <PhoneAuthConfirmButton
            disabled={phoneState.verify.disabled}
            onClick={phoneState.verify.sendVerifyCode}
          >
            인증하기
          </PhoneAuthConfirmButton>
        </div>
      </div>

      {verifyCodeState.visible && (
        <div css={styles.phoneAuthContainer}>
          <TextField
            fullWidth
            placeholder="인증 번호를 입력하세요."
            disabled={verifyCodeState.disabled}
            value={verifyCodeState.value}
            onChange={verifyCodeState.onChange}
            helperText={
              <SmallCaption
                color={verifyCodeState.helper.error ? "error" : "primary"}
              >
                {verifyCodeState.helper.text}
              </SmallCaption>
            }
          />
          <PhoneAuthConfirmButton
            disabled={verifyCodeState.confirm.disabled}
            onClick={
              verifyCodeState.timer.timeOver
                ? verifyCodeState.send
                : verifyCodeState.confirm.confirmVerifyCode
            }
          >
            <Typography variant="body2" display={"flex"} flexDirection="column">
              <span>{verifyCodeState.label}</span>

              {!verifyCodeState.timer.timeOver && !verifyCodeState.disabled && (
                <Timer
                  time={verifyCodeState.timer.value}
                  setTime={verifyCodeState.timer.onChange}
                  pause={verifyCodeState.disabled}
                />
              )}
            </Typography>
          </PhoneAuthConfirmButton>
        </div>
      )}
    </section>
  );
};

const styles = {
  formFieldContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
  `,
  formFieldWrapper: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  `,
  phoneAuthContainer: css`
    display: flex;
    gap: 12px;
  `,
};

const SmallCaption = (p: TypographyProps) => (
  <Typography variant="caption" fontSize={"10px"} fontWeight={100} {...p} />
);

const PhoneAuthConfirmButton = (p: ButtonProps) => (
  <Button
    variant="outlined"
    sx={{ whiteSpace: "nowrap", minWidth: "80px", height: "56px" }}
    {...p}
  />
);
