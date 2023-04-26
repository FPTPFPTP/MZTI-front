// 정규식 체크
export default (regExp: RegExp, param: string) => {
    const regex = RegExp(regExp);
    return regex.test(param);
};

export const NICKNAME_REG = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,8}$/;

// 2~8자 사이 한글, 영문, 숫자를 입력
export const WORD_CHECK_REG = /^[\w가-힣]{2,8}$/;

export const SPECIAL_WORD_CHECK_REG = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]*$/;
