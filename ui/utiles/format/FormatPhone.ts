
/**
 * 텍스트를 받아서 휴대폰 형식 - `010 0000 0000` 형태로 변환
 * */
export const formatToPhoneNumber = (
    text: string,
    maxLength: number = 11
) => {
    const delimiter = " "
    const numberWithout = text.replace(/[^0-9]/g, '')

    if (numberWithout.length > maxLength) {
        return text.slice(0, -1)
    }

    const dashPlaces = [3, 7]
    const numberWithDelimiter = numberWithout
        .split('')
        .reduce<Array<string>>(
            (acc, curr, index) =>
                dashPlaces
                    .includes(index)
                    ? [...acc, delimiter, curr]
                    : [...acc, curr]
            , []
        )
        .join('')

    return numberWithDelimiter
}