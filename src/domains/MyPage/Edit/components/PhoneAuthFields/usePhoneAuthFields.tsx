import {ChangeEvent, useMemo, useState} from "react";
import {AuthPhonePolicy, SignupPolicy} from "@/common/policies";

export const usePhoneAuthFields = () => {
    const [phoneValue, setPhoneValue] = useState("");
    const [verifiedValue, setVerifiedValue] = useState("");
    const verifidedCode = "1234";

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneValue(e.target.value);
    }
    const handleVerifiedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVerifiedValue(e.target.value);
    }

    // Validate phone number
    const [isVisibleVerifiedField, setVisibleVerifiedField] = useState(false);
    const isValidPhone = SignupPolicy.validatePhoneNumber(phoneValue);
    const handlePhoneAuthClick = () => {
        setVisibleVerifiedField(true);
    };

    // Setting timeer
    const [timer, setTimer] = useState(0);
    const handleTimeChange = useMemo(
        () => (time: number) => setTimer(time),
        [setTimer]
    );
    const timerOver = timer < 0;

    // Verify code
    const [isSendedCode, setSendedCode] = useState(false);
    const handleVerifyCodeClick = () => {
        setSendedCode(verifiedValue == verifidedCode);
        setTimer(AuthPhonePolicy.maxTime);
    };

    return {
        phoneState: {
            value: phoneValue,
            onChange: handlePhoneChange,
            helper: {
                visible: !!phoneValue && (isVisibleVerifiedField || !isValidPhone),
                error: isValidPhone || isVisibleVerifiedField,
                text: isVisibleVerifiedField ? "인증이 완료되었습니다." : "전화번호 형식이 틀렸습니다.",
            },
            button: {
                disabled: !phoneValue || !isValidPhone || isVisibleVerifiedField,
                onClick: handlePhoneAuthClick,
            },
            disabled: isVisibleVerifiedField
        },
        verifiedState: {
            value: verifiedValue,
            onChange: handleVerifiedChange,
            helper: {
                error: isSendedCode,
                text: isSendedCode ? "인증이 완료되었습니다." : "인증번호를 확인해주세요.",
            },
            timer: {
                value: timer,
                onChange: handleTimeChange,
                timeOver: timerOver,
                disabled: !isSendedCode
            },
            button: {
                onClick: handleVerifyCodeClick,
                text: timerOver ? "다시받기" : "확인"
            },
            visible: isVisibleVerifiedField,
            disabled: isSendedCode
        }
    }
}
