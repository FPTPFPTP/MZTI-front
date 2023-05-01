import { css } from '@emotion/react';
import colors from './color';

const customReset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    input,
    button {
        cursor: pointer;
        box-shadow: none;
        background: none;
        border: 0;
        color: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-appearance: none; /* for input */
        &:focus,
        &:active {
            outline: none;
        }
    }
    ol,
    ul,
    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover {
        color: inherit;
        text-decoration: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    form,
    fieldset,
    textarea,
    input {
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    /* Chrome autofill 스타일 제거, 커스텀 */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    }
`;

const globalReset = () => css`
    ${customReset}

    html {
        /** 
        * 화면 너비에 비례하는 크기에 대응하기 위함
        * 100vw/390px * 10px = 2.6667vw
        * -> 너비가 390px인 디자인 시안에서 10px을 1rem으로 간주  
        */
        /* font-size: 2.6667vw; */
        line-height: 1;
        font-size: 14px;
        font-weight: 400;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -o-text-size-adjust: none;
        -ms-overflow-style: none;
    }

    @media (min-width: 768px) {
        html {
            font-size: 20.477px;
        }
    }

    body {
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
        }
        // https://github.com/orioncactus/pretendard
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
            'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        background-color: ${colors.WHITE};
        color: ${colors.BLACK};
        letter-spacing: -0.025em;
        position: relative;
    }
    html,
    body {
        height: 100vh;
        width: 100%;
    }
    .toastui-editor-contents p {
        font-size: 1.2rem;
    }

    /** 반응형 */
    .homeLayout {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: ${colors.GRAY_BRIGHT_4};
    }
    /* Drawer 모달 */
    .rbd-y5j5tv9v8tb-db {
        z-index: 100 !important;
    }
    .rbd-k89gwu61wl-dr {
        z-index: 101 !important;
    }
    .ant-modal {
        width: 100% !important;
        padding: 0 45px !important;
        max-width: 100% !important;
        .ant-modal-title {
            font-weight: 700;
            font-size: 17px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.408px;
            color: #1b1e26;
        }
        .ant-modal-body {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
        .ant-modal-footer {
            button {
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
        }
    }
`;
export default globalReset;
