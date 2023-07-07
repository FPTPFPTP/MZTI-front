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
