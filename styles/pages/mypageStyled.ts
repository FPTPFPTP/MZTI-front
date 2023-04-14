import { css } from '@emotion/react';
import colors from '@/styles/color';
import color from '@/styles/color';

export const Layout = css`
    position: relative;
    height: 100vh;
    padding: 20px;
    background-color: ${color.WHITE};
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MypageWrap = css`
    padding: 0 34px;
    margin: 50px 0 0 0;
    background-color: ${color.WHITE};
    .notUser {
        &__flex {
            display: flex;
            align-items: center;
            justify-content: center;
            .notUser__left {
                margin-right: 25px;
                text-align: center;
                .profile {
                    border: 2px solid ${colors.BLACK};
                    padding: 14px 10px 0 10px;
                    border-radius: 50%;
                    overflow: hidden;
                }
                p {
                    margin-top: 5px;
                    font-size: 13px;
                    line-height: 16px;
                    text-align: center;
                }
            }
            .notUser__right {
                h3 {
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 38px;
                    margin: 8px 0;
                }
                p {
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 16px;
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
`;

export const NoticeViewStyle = css`
    .header {
        padding: 10px 32px 16px;
        border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
        h3 {
            font-size: 1.4rem;
        }
        p {
            font-size: 1rem;
            color: ${colors.GRAY_STRONG};
            font-weight: 300;
            text-align: right;
            margin-top: 35px;
        }
    }
    article {
        padding: 57px 33px;
        font-size: 1.2rem;
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
    min-width: 390px;
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
