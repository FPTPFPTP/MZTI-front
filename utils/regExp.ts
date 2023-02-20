// 정규식 체크
export default (regExp: RegExp, param: string) => {
    const regex = RegExp(regExp);
    return regex.test(param);
};

export const NICKNAME_REG = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,8}$/;
