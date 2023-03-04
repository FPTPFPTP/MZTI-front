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

    button {
        background: none;
        background-color: transparent;
        border: 0;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    a {
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
  * -> 너비가 390px인 디자인 시안에서 10px을 1rem으로 간주  */
        font-size: 2.6667vw;
    }

    @media (min-width: 768px) {
        html {
            font-size: 20.477px;
        }
    }

    body {
        // https://github.com/orioncactus/pretendard
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
            'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        background-color: ${colors.WHITE};
        color: ${colors.BLACK};
    }
`;
export default globalReset;