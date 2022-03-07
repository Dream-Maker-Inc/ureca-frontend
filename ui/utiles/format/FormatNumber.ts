

/**
 * 1자리수 숫자를 2자리 수 숫자 텍스트로 바꿔서 리턴
 * 1 -> `01`
 * 10 -> `10`
 * */
export const toDoubleDigits = (number: number) => {
    const numberString = number.toString()
    return (numberString.length < 2) ? `0${number}` : numberString
}