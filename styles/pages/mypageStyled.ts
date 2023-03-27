import { css } from '@emotion/react';

export const Layout = css`
    position: relative;
    height: 100vh;
    padding: 20px;
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MypageWrap = css`
    padding: 0 34px;
    margin: 50px 0 0 0;
    .notUser {
        &__flex {
            display: flex;
            align-items: center;
            justify-content: center;
            .notUser__left {
                margin-right: 25px;
                text-align: center;
                .profile {
                    border: 2px solid #000;
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
            background: #000000;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #ffffff;
            width: 100%;
            padding: 10px 0;
            margin: 40px 0 38px;
            display: flex;
            justify-content: center;
        }
    }
`;
