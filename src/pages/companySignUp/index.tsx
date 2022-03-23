import {
  FormSubTitleProps,
  FormSubTitle,
} from "@/common/components/FormSubTitle";
import { css } from "@emotion/react";
import {
  Stack,
  TextField,
  ButtonGroup,
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export type TextFieldWithLabelProps = {
  formSubTitleProps: FormSubTitleProps;
  placeholder: string;
};

export type TwinButtonGroupProps = {
  firstVal: string;
  secondVal: string;
};

export type TextFieldWithButton = {
  btnText: string;
  placeholder: string;
};

const CompanySignUp = () => {
  return (
    <div css={styles.root}>
      <div css={styles.inner}>
        <Title>회원가입</Title>
        <div css={styles.subContainer}>
          <SubTitle>부가 정보</SubTitle>
          <TextFieldWithLabel
            formSubTitleProps={{
              title: "상호명",
              desc: "사업자등록증상 상호명을 입력해 주세요.",
            }}
            placeholder="상호명을 입력하세요."
          />
          <Stack>
            <FormSubTitle
              title="상호명"
              desc="사업자등록증상 상호명을 입력해 주세요."
            />
            <TwinButtonGroup firstVal="기업" secondVal="법인" />
          </Stack>
          <Stack>
            <FormSubTitle
              title="사업자 인증"
              desc="사업자등록번호를 입력하신 후 인증 버튼을 클릭해 주세요."
            />
            <TextFieldWithButton
              placeholder="사업자등록번호를 입력하세요."
              btnText="인증하기"
            />
          </Stack>
          <TextFieldWithLabel
            formSubTitleProps={{
              title: "대표자명",
              desc: "사업자등록증상 대표자명을 입력해 주세요.",
            }}
            placeholder="대표자명을 입력하세요."
          />
        </div>
        <hr css={styles.hr} />
        <div css={styles.subContainer}>
          <SubTitle>추가 정보</SubTitle>
          <TextFieldWithLabel
            formSubTitleProps={{
              title: "대표 번호",
              desc: "전문가 상세 정보에 표시할 회사 대표 번호를 입력해 주세요.",
            }}
            placeholder="대표번호를 입력하세요."
          />
          <TextFieldWithLabel
            formSubTitleProps={{
              title: "홈페이지 주소",
              desc: "전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요.",
            }}
            placeholder="홈페이지 주소를 입력하세요."
          />
          <TextFieldWithLabel
            formSubTitleProps={{
              title: "이메일",
              desc: "각종 정보가 이메일로 발송됩니다.",
            }}
            placeholder="이메일을 입력하세요."
          />
          <JoinButton variant="outlined">가입하기</JoinButton>
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0;
  `,
  inner: css`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  subContainer: css`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  hr: css`
    width: 100%;
    color: "black";
    opacity: 0.2;
  `,
};

const SubTitle = (p: TypographyProps) => (
  <Typography
    variant={"subtitle1"}
    fontWeight={700}
    color={"text.secondary"}
    fontSize={"18px"}
    {...p}
  />
);

const Title = (p: TypographyProps) => (
  <Typography
    variant={"subtitle1"}
    fontWeight={800}
    color={"text.secondary"}
    fontSize={"24px"}
    sx={{
      alignSelf: "center",
    }}
    {...p}
  />
);

const TextFieldWithLabel = ({
  formSubTitleProps,
  placeholder,
}: TextFieldWithLabelProps) => (
  <Stack>
    <FormSubTitle {...formSubTitleProps} />
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
    />
  </Stack>
);

const JoinButton = (p: ButtonProps) => (
  <Button
    sx={{
      height: "56px",
      fontSize: "16px",
    }}
    {...p}
  />
);

const TwinButtonGroup = ({ firstVal, secondVal }: TwinButtonGroupProps) => (
  <ButtonGroup
    variant="outlined"
    aria-label="outlined button group"
    size="large"
  >
    <Button sx={{ width: "100%", height: "56px", fontSize: "16px" }}>
      {firstVal}
    </Button>
    <Button sx={{ width: "100%", height: "56px", fontSize: "16px" }}>
      {secondVal}
    </Button>
  </ButtonGroup>
);

const TextFieldWithButton = ({ btnText, placeholder }: TextFieldWithButton) => (
  <Stack direction="row">
    <TextField
      id="outlined-basic"
      variant="outlined"
      placeholder={placeholder}
      sx={{ width: "100%", marginRight: "12px" }}
    />
    <Button variant="outlined" size="large" sx={{ width: "40%" }}>
      {btnText}
    </Button>
  </Stack>
);

TextFieldWithButton;

export default CompanySignUp;
