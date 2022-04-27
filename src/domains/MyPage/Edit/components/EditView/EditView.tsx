import { css } from "@emotion/react";
import { MyPageIcon } from "@/domains/MyPage/components/MyPageIcon";
import {
  Button,
  ButtonProps,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useEditView } from "./useEditView";
import { TextFieldWithTitle } from "@/domains/MyPage/Edit/components/TextFieldWithTitle";
import { PhoneAuthFields } from "../PhoneAuthFields";
import { FieldHeader } from "../FieldHeader";

export type NameAlertProps = {
  title: string;
  desc: string;
};

export const EditView = () => {
  const {
    myPageIconData,
    handleEditClick,
    nicknameState,
    selfDescState,
    emailState,
    phoneState,
    verifiedPhoneState,
    validationState,
  } = useEditView();

  return (
    <div css={styles.root}>
      <section css={styles.container}>
        <div css={styles.rootTitle}>
          <MyPageTitle>마이페이지</MyPageTitle>
        </div>
        <div css={styles.topContainer}>
          <TopTitle>프로필 수정</TopTitle>
        </div>
        <Stack
          component={"form"}
          minWidth={"400px"}
          gap={"45px"}
          margin={"0 auto"}
        >
          <MyPageIcon
            avatarImage={myPageIconData.avatarImage}
            brandNameText={myPageIconData.brandNameText}
            brandInfoText={myPageIconData.brandInfoText}
          />
          <TextFieldWithTitle
            title={"닉네임"}
            desc={"전문가 리스트에 표시되는 닉네임을 입력해 주세요."}
            textfieldProps={{
              placeholder: "한 줄 소개를 입력하세요.",
              value: nicknameState.value,
              onChange: (e) => nicknameState.onChange(e.target.value),
            }}
          />
          <TextFieldWithTitle
            title={"한 줄 소개"}
            desc={"전문가 리스트에 표시되는 한 줄 소개 문구를 입력해 주세요."}
            textfieldProps={{
              placeholder: "한 줄 소개를 입력하세요.",
              value: selfDescState.value,
              onChange: (e) => selfDescState.onChange(e.target.value),
            }}
          />

          <FieldHeader
            title={"실명"}
            desc={
              "실명은 최초 등록 이후 변경이 불가합니다. 개명, 명의 변경 등이 필요하실 경우 고객센터로 문의주세요."
            }
          />

          <Stack gap={"6px"}>
            <FieldHeader
              title={"휴대폰 본인 인증"}
              desc={"휴대폰 번호를 입력하신 후 인증 번호로 인증해 주세요."}
              necessary={true}
            />
            <PhoneAuthFields
              phoneState={phoneState}
              verifiedPhoneState={verifiedPhoneState}
            />
          </Stack>
          <TextFieldWithTitle
            title={"이메일"}
            desc={"각종 정보가 이메일로 발송됩니다."}
            textfieldProps={{
              placeholder: "이메일을 입력하세요.",
              helperText: emailState.helper.visible && (
                <SmallCaption color={emailState.helper.error}>
                  {emailState.helper.text}
                </SmallCaption>
              ),

              value: emailState.value,
              onChange: (e) => emailState.onChange(e.target.value),
            }}
          />
          <EditButton
            disabled={validationState.disabled}
            onClick={handleEditClick}
          >
            수정하기
          </EditButton>
        </Stack>
      </section>
    </div>
  );
};

const styles = {
  root: css`
    width: 1024px;
    min-height: 100%;
    margin: 0 auto;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 100px 0;
  `,
  rootTitle: css`
    margin: 0 auto;
  `,
  topContainer: css`
    width: 100%;
  `,
};

const MyPageTitle = (p: TypographyProps) => (
  <Typography variant="h4" fontWeight={700} {...p} />
);

const TopTitle = (p: TypographyProps) => (
  <Typography variant="h5" fontWeight={600} {...p} />
);

const SmallCaption = (p: TypographyProps) => (
  <Typography variant="caption" fontSize={"10px"} fontWeight={100} {...p} />
);

const EditButton = (p: ButtonProps) => (
  <Button
    variant="outlined"
    color={"primary"}
    size="large"
    sx={{ padding: "16px 0" }}
    {...p}
  />
);
