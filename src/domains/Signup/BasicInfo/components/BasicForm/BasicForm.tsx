import { PasswordTextField2 } from "@/common/components/inputs/PasswordTextField2";
import { FormTitle } from "@/domains/Signup/common/components/FormTitle";
import { FieldHeaderWithContent } from "@/domains/Signup/common/components/templates/FieldHeaderWithContent";
import { signupStyles } from "@/domains/Signup/common/styles/Signup.style";
import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { SmallCaption } from "../../../common/components/SmallCaption";
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

  const { formStyle } = signupStyles;

  return (
    <form css={formStyle.basicForm}>
      <FormTitle>기본 정보</FormTitle>

      <FieldHeaderWithContent
        fieldHeaderProps={{
          title: "아이디",
          description: "로그인 시 사용되는 아이디 입니다.",
          requirement: true,
        }}
      >
        <TextField
          fullWidth
          placeholder="아이디를 입력하세요."
          helperText={
            <SmallCaption color={loginState.helper.color}>
              {loginState.helper.text}
            </SmallCaption>
          }
          value={loginState.value}
          onChange={(e) => loginState.onChange(e.target.value)}
        />
      </FieldHeaderWithContent>

      <section css={styles.passwordSection}>
        <FieldHeaderWithContent
          fieldHeaderProps={{
            title: "비밀번호",
            description:
              "영문 대문자와 특수문자를 포함하여 8자 이상 입력해 주세요.",
            requirement: true,
          }}
        >
          <PasswordTextField2
            placeholder="비밀번호를 입력하세요."
            helperText={
              <SmallCaption color={pwState.helper.color}>
                {pwState.helper.text}
              </SmallCaption>
            }
            value={pwState.value}
            onChange={(e) => pwState.onChange(e.target.value)}
          />
        </FieldHeaderWithContent>

        <FieldHeaderWithContent
          fieldHeaderProps={{
            title: "비밀번호 확인",
            description: "비밀번호를 다시 입력해 주세요.",
            requirement: true,
          }}
        >
          <PasswordTextField2
            placeholder="비밀번호를 다시 입력하세요."
            helperText={
              <SmallCaption color={pwConfirmState.helper.color}>
                {pwConfirmState.helper.text}
              </SmallCaption>
            }
            value={pwConfirmState.value}
            onChange={(e) => pwConfirmState.onChange(e.target.value)}
          />
        </FieldHeaderWithContent>
      </section>

      <FieldHeaderWithContent
        fieldHeaderProps={{
          title: "실명",
          description: "플랫폼 내 계약 시 절차에 활용됩니다.",
          requirement: true,
        }}
      >
        <TextField
          fullWidth
          placeholder="실명을 입력하세요."
          value={usernameState.value}
          onChange={(e) => usernameState.onChange(e.target.value)}
        />
      </FieldHeaderWithContent>

      <PhoneAuthFields
        phoneState={phoneState}
        verifiedPhoneState={verifiedPhoneState}
      />

      <FieldHeaderWithContent
        fieldHeaderProps={{
          title: "이메일",
          description: "각종 정보가 이메일로 발송됩니다.",
        }}
      >
        <TextField
          fullWidth
          placeholder="이메일을 입력하세요."
          value={emailState.value}
          onChange={(e) => emailState.onChange(e.target.value)}
          helperText={
            <SmallCaption color={emailState.helper.color}>
              {emailState.helper.text}
            </SmallCaption>
          }
        />
      </FieldHeaderWithContent>
    </form>
  );
};

const styles = {
  passwordSection: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
  `,
};
