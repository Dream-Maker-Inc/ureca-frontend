import {css} from "@emotion/react";
import {Button, Stack, TextField, Typography, TypographyProps} from "@mui/material";
import {usePhoneAuthFields} from "./usePhoneAuthFields";

export const PhoneAuthFields = () => {

    const {phoneState, verifiedState} = usePhoneAuthFields();

    return (
        <Stack gap={"6px"}>
            <Stack direction={"row"} gap={"12px"}>
                <TextField
                    disabled={phoneState.disabled}
                    placeholder="휴대폰 번호를 입력하세요."
                    value={phoneState.value}
                    onChange={phoneState.onChange}
                    helperText={
                        <SmallCaption color={phoneState.helper.error ? "primary" : "error"}>
                            {phoneState.helper.visible && phoneState.helper.text}
                        </SmallCaption>
                    }
                    sx={{width: "100%"}}/>
                <Button
                    disabled={phoneState.button.disabled}
                    onClick={phoneState.button.onClick}
                    size="large" color={"primary"}
                    sx={{whiteSpace: "nowrap", minWidth: "80px", height: "56px"}}>인증하기</Button>
            </Stack>

            {verifiedState.visible &&
                <Stack direction={"row"} gap={"12px"}>
                    <TextField
                        disabled={verifiedState.disabled}
                        placeholder="인증 번호를 입력하세요."
                        value={verifiedState.value}
                        onChange={verifiedState.onChange}
                        helperText={
                            <SmallCaption color={verifiedState.helper.error ? "primary" : "error"}>
                                {verifiedState.helper.text}
                            </SmallCaption>
                        }
                        sx={{width: "100%"}}/>
                    <Button
                        disabled={verifiedState.disabled}
                        onClick={verifiedState.button.onClick}
                        size="large" color={"primary"} sx={{whiteSpace: "nowrap", minWidth: "80px", height: "56px"}}>
                        {verifiedState.button.text}
                    </Button>
                </Stack>
            }
        </Stack>
    )
}
const SmallCaption = (p: TypographyProps) => (
    <Typography variant={"caption"} fontSize={"10px"} fontWeight={100} {...p}/>
);

const Title = (p: TypographyProps) => (
    <Typography variant={"subtitle1"} lineHeight={1} fontWeight={600} {...p} />
)

const Desc = (p: TypographyProps) => (
    <Typography variant={"body2"} sx={{opacity: 0.9}}  {...p} />
)


