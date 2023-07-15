import { css } from '@emotion/react';

export const SimpleTestBaseStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fffade;
`;

export const SimpleTestStyle = css`
    ${SimpleTestBaseStyle}
    .intro {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 57px;
    }
    .title {
        font-size: 30px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 170px;
    }
    .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        gap: 10px;
        margin-bottom: 90px;
    }
`;

export const SimpleTestResultStyle = css`
    ${SimpleTestBaseStyle}
    padding: 20px 0;
    .logo {
        margin-bottom: 11px;
    }
    .result_question {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .result_title {
        color: #fff;
        font-family: LOTTERIA CHAB;
        font-size: 80px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 37.5% */
        letter-spacing: 5px;
        -webkit-text-stroke: 3px #000;
    }
    .result_submit {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
        opacity: 0.699999988079071;
        background: rgba(255, 255, 255, 0.7);
        margin: 0 20px;
        padding: 27px 10px;
    }
    .result_btn {
        margin-bottom: 65px;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
    }
`;
