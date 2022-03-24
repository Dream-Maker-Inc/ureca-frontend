import {
  FormSubTitleProps,
  FormSubTitle,
} from "@/common/components/FormSubTitle";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { css } from "@emotion/react";
import { SignupPolicy } from "@/common/policies";
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

interface IFrom {
  brandName: string;
  businessCert: string;
  repName: string;
  repNum: string;
  siteAddress: string;
  emailAddress: string;
  firstName: string;
}

const CompanySignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFrom>({ mode: "all" });
  const onValid = (data: IFrom) => {};

  return (
    <div css={styles.root}>
      <div css={styles.inner}>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit(onValid)}>
          <div css={styles.subContainer}>
            <SubTitle>부가 정보</SubTitle>
            <Controller
              name="brandName"
              control={control}
              render={() => (
                <Stack>
                  <FormSubTitle
                    title="상호명"
                    desc="사업자등록증상 상호명을 입력해 주세요."
                  />
                  <TextField
                    id="outlined-basic"
                    placeholder="상호명을 입력하세요."
                    variant="outlined"
                    helperText={
                      <SmallCaption color={"error"}>
                        {errors?.brandName?.message}
                      </SmallCaption>
                    }
                    {...register("brandName", {
                      required: "상호명을 입력하세요",
                    })}
                  />
                </Stack>
              )}
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
            <Controller
              name="repNum"
              control={control}
              render={() => (
                <Stack>
                  <FormSubTitle
                    title="대표번호"
                    desc="전문가 상세 정보에 표시할 회사 대표 번호를 입력해 주세요."
                  />
                  <TextField
                    id="outlined-basic"
                    placeholder="대표번호를 입력하세요."
                    variant="outlined"
                    helperText={
                      <SmallCaption color={"error"}>
                        {errors?.repNum?.message}
                      </SmallCaption>
                    }
                    {...register("repNum", {
                      required: "대표번호를 입력하세요",
                    })}
                  />
                </Stack>
              )}
            />
            <Controller
              name="siteAddress"
              control={control}
              render={() => (
                <Stack>
                  <FormSubTitle
                    title="홈페이지 주소"
                    desc="전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요."
                  />
                  <TextField
                    id="outlined-basic"
                    placeholder="홈페이지 주소를 입력하세요."
                    variant="outlined"
                    helperText={
                      <SmallCaption color={"error"}>
                        {errors?.siteAddress?.message}
                      </SmallCaption>
                    }
                    {...register("siteAddress")}
                  />
                </Stack>
              )}
            />

            <Stack>
              <FormSubTitle
                title="이메일"
                desc="전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요."
              />
              <TextField
                id="outlined-basic"
                placeholder="홈페이지 주소를 입력하세요."
                variant="outlined"
                helperText={
                  <SmallCaption color={"error"}>
                    {errors?.emailAddress?.message}
                  </SmallCaption>
                }
                {...register("emailAddress", {
                  validate: {
                    noNico: (value) =>
                      value.includes("nico") ? "no nicos allowed" : true,
                  },
                })}
              />
            </Stack>

            <JoinButton variant="outlined">가입하기</JoinButton>
          </div>
        </form>
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
    type="submit"
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

const SmallCaption = (p: TypographyProps) => (
  <Typography variant="caption" fontSize={"10px"} fontWeight={100} {...p} />
);

export default CompanySignUp;
