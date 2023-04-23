import { css } from '@emotion/react';

export const Login = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    .login_copyText {
        margin-bottom: 196px;
        margin-top: 50px;
    }
    .login_button {
        display: grid;
        text-align: center;
        color: #aeaeb2;
        font-weight: 300;
        font-size: 12px;
    }
    .kakao_login {
        margin: 8px 0;
    }
    .login_button--descBottom {
        margin-top: 40px;
        font-size: 12px;
        color: #aeaeb2;
        a {
            font-weight: 500;
            font-size: 12px;
            text-align: center;
            text-decoration-line: underline;
            color: #545456;
            margin-left: 8px;
        }
    }
`;
