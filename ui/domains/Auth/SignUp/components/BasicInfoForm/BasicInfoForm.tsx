import {
  PasswordTextField,
  PasswordTextFieldProps,
} from "@/ui/components/inputs/PasswordTextField";
import { useThemeHook } from "@/ui/themes/CustomThemes";
import { css } from "@emotion/react";
import { ErrorOutlineRounded, MailOutlineRounded } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { useBasicInfoForm } from "./useBasicInfoForm";

export type BasicInfoFormProps = {
  onSubmit: () => void;
};

export const BasicInfoForm = ({ onSubmit }: BasicInfoFormProps) => {
  const { nicknameState, emailState, pwState, pwConfirmState, submitState } =
    useBasicInfoForm();

  return (
    <article css={styles.root}>
      <div css={styles.inner}>
        <header css={styles.header}>
          <Typography variant={"h4"} fontWeight={600}>
            {"계정 정보"}
          </Typography>

          <Typography
            variant={"subtitle2"}
            css={css`
              opacity: 0.7;
            `}
          >
            {"서비스 이용을 위해 기본 정보를 입력해주세요."}
          </Typography>
        </header>

        <form css={styles.form}>
          <section css={styles.nicknameWrapper}>
            <InputBase
              placeholder={"닉네임"}
              css={css`
                font-size: 20px;
              `}
              value={nicknameState.value}
              onChange={nicknameState.onChange}
            />
          </section>

          <div css={styles.accountWrapper}>
            <section>
              <EmailField
                error={!!emailState.error}
                helperText={emailState.error || ""}
                value={emailState.value}
                onChange={emailState.onChange}
              />
            </section>

            <section css={styles.passwordSection}>
              <PasswordField
                error={!!pwState.error}
                helperText={pwState.error}
                endAdornment={
                  !!pwState.error && (
                    <Tooltip
                      color={"warning"}
                      title={"숫자,영문 대소문자 + 특수문자 조합으로 8~20자"}
                      sx={{ mr: -1 }}
                    >
                      <IconButton>
                        <ErrorOutlineRounded fontSize={"small"} />
                      </IconButton>
                    </Tooltip>
                  )
                }
                value={pwState.value}
                onChange={pwState.onChange}
              />

              {!pwConfirmState.visible && (
                <PasswordField
                  error={!!pwConfirmState.error}
                  helperText={pwConfirmState.error}
                  placeholder={"비밀번호를 한 번 더 입력해주세요"}
                  value={pwConfirmState.value}
                  onChange={pwConfirmState.onChange}
                />
              )}
            </section>

            <section css={styles.submitSection}>
              {submitState.visible && (
                <Button
                  variant={"contained"}
                  onClick={() => submitState.onClick(onSubmit)}
                >
                  {"다음"}
                </Button>
              )}
            </section>
          </div>
        </form>
      </div>
    </article>
  );
};

const styles = {
  root: css`
    width: 100%;
    height: 100%;
    gap: 32px;
    padding-top: 48px;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  header: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 48px;
    gap: 16px;
  `,
  nicknameWrapper: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 40px;
  `,
  accountWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  passwordSection: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  submitSection: css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,
};

const EmailField = (p: TextFieldProps) => {
  const { palette } = useThemeHook();
  const inputIconColor = palette.grey["400"];

  return (
    <TextField
      fullWidth
      variant={"outlined"}
      placeholder={"이메일"}
      size={"small"}
      type={"email"}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"} sx={{ mt: "-2px" }}>
            <Tooltip title={"이메일을 입력해주세요"}>
              <MailOutlineRounded
                htmlColor={inputIconColor}
                fontSize={"small"}
              />
            </Tooltip>
          </InputAdornment>
        ),
      }}
      {...p}
    />
  );
};

const PasswordField = (p: PasswordTextFieldProps) => (
  <PasswordTextField fullWidth size={"small"} {...p} />
);
