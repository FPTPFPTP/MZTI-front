import { css } from '@emotion/react';
import colors from '@/styles/color';
import color from '@/styles/color';

export const Layout = css`
    position: relative;
    height: calc(100vh - 163px);
    padding: 0px 20px;
    background-color: ${color.WHITE};
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MypageWrap = css`
    padding: 0 20px 20px;
    background: #f5f5f5;
    .first-title {
        padding-left: 20px;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.408px;
        margin-bottom: 35px;
    }
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-top: 60px;
        h1 {
            color: #545456;
            font-weight: 700;
            font-size: 24px;
            letter-spacing: -0.408px;
        }
    }
    .notUser {
        background-color: #fff;
        border-radius: 13px;
        padding: 25px 15px 13px 15px;
        margin-top: 37px;
        &__flex {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #ebebeb;
            padding-bottom: 20px;
            margin-bottom: 15px;
            .mbti {
                background: #dbdbdb;
                border-radius: 61px;
                padding: 4px 8px;
                margin-right: 5px;
            }
            .lv {
                border: 1px solid #dbdbdb;
                border-radius: 61px;
                padding: 4px 8px;
            }
            .notUser__left {
                margin-right: 17px;
                text-align: center;
                .profile {
                    border-radius: 50%;
                    overflow: hidden;
                }
                p {
                    font-weight: 700;
                    font-size: 12px;
                    color: #000000;
                }
            }
            .notUser__right {
                h3 {
                    font-weight: 500;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.408px;
                    color: #1b1e26;
                    margin-top: 9px;
                }
                p {
                    font-weight: 700;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                }
                .notUser__right--flex {
                    display: flex;
                }
                .notUser__right--flex {
                    display: flex;
                }
                .notUser__right--flex {
                    display: flex;
                }
                .notUser__right--flex {
                    display: flex;
                }
            }
        }
        .loginButton {
            background: ${colors.BLACK};
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: ${colors.WHITE};
            width: 100%;
            padding: 10px 0;
            margin: 40px 0 38px;
            display: flex;
            justify-content: center;
        }
    }
    .advertisement {
        font-weight: 400;
        font-size: 1.3rem;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        padding: 15px 30px;
        width: 100%;
    }
    .profileWrap {
        background: #ffffff;
        border-radius: 13px;
        padding: 25px;
        margin: 37px 0 12px;
    }
`;

export const NoticeViewStyle = css`
    height: 100vh;
    .header {
        padding: 20px 20px 40px 20px;
        border-top: 0.5px solid #a7a7a7;
        h3 {
            font-size: 20px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: -0.4px;
            text-align: left;
            color: #1b1e26;
        }
        p {
            font-size: 12px;
            font-weight: 300;
            line-height: 12px;
            letter-spacing: -0.4px;
            text-align: left;
            color: #545456;
        }
    }
    article {
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: -0.4px;
        text-align: left;
        color: #545456;
        padding: 0 20px 20px;
    }
`;

export const NoticeShare = css`
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${color.GRAY_LIGHT_5};
    height: 84px;
    min-width: 375px;
    max-width: 600px;
    width: 100%;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            margin-left: 14px;
            font-weight: 300;
        }
    }
`;
