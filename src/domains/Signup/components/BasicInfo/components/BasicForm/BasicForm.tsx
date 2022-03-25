import { PasswordTextField2 } from "@/common/components/inputs/PasswordTextField2";
import { css } from "@emotion/react";
import { TextField, Typography, TypographyProps } from "@mui/material";
import { FieldHeader } from "../FieldHeader";
import { PhoneAuthFields } from "../PhoneAuthFields";
import { useBasicForm } from "./useBasicForm";

export const BasicForm = () => {
  const {
    loginState,
    pwState,
    pwConfirmState,
    usernameState,
    emailState,
    phoneState,
    verifiedPhoneState,
  } = useBasicForm();

  return (
    <form css={styles.basicForm}>
      <Typography variant="h6" fontWeight={"400"}>
        기본 정보
      </Typography>

      <div css={styles.formFieldWrapper}>
        <FieldHeader
          title={"아이디"}
          description={"로그인 시 사용되는 아이디 입니다."}
          requirement
        />
        <TextField
          fullWidth
          placeholder="아이디를 입력하세요."
          helperText={
            <SmallCaption color={"error"}>
              {loginState.helper.error && loginState.helper.text}
            </SmallCaption>
          }
          value={loginState.value}
          onChange={loginState.onChange}
        />
      </div>

      <section css={styles.formFieldContainer}>
        <div css={styles.formFieldWrapper}>
          <FieldHeader
            title={"비밀번호"}
            description={
              "영문 대문자와 특수문자를 포함하여 8자 이상 입력해 주세요."
            }
            requirement
          />
          <PasswordTextField2
            placeholder="비밀번호를 입력하세요."
            helperText={
              <SmallCaption color={pwState.helper.error ? "error" : "primary"}>
                {pwState.helper.visible && pwState.helper.text}
              </SmallCaption>
            }
            value={pwState.value}
            onChange={pwState.onChange}
          />
        </div>

        <div css={styles.formFieldWrapper}>
          <FieldHeader
            title={"비밀번호 확인"}
            description={"비밀번호를 다시 입력해 주세요."}
            requirement
          />
          <PasswordTextField2
            placeholder="비밀번호를 다시 입력하세요."
            helperText={
              <SmallCaption
                color={pwConfirmState.helper.error ? "error" : "primary"}
              >
                {pwConfirmState.helper.visible && pwConfirmState.helper.text}
              </SmallCaption>
            }
            value={pwConfirmState.value}
            onChange={pwConfirmState.onChange}
          />
        </div>
      </section>

      <div css={styles.formFieldWrapper}>
        <FieldHeader
          title={"실명"}
          description={"플랫폼 내 계약 시 절차에 활용됩니다."}
          requirement
        />
        <TextField
          fullWidth
          placeholder="실명을 입력하세요."
          value={usernameState.value}
          onChange={usernameState.onChange}
        />
      </div>

      <PhoneAuthFields
        phoneState={phoneState}
        verifiedPhoneState={verifiedPhoneState}
      />

      <div css={styles.formFieldWrapper}>
        <FieldHeader
          title={"이메일"}
          description={"각종 정보가 이메일로 발송됩니다."}
        />
        <TextField
          fullWidth
          placeholder="이메일을 입력하세요."
          value={emailState.value}
          onChange={emailState.onChange}
          helperText={
            <SmallCaption color={emailState.helper.error ? "error" : "primary"}>
              {emailState.helper.visible && emailState.helper.text}
            </SmallCaption>
          }
        />
      </div>
    </form>
  );
};

const styles = {
  basicForm: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
  `,
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
