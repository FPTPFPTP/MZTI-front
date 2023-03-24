import { css } from '@emotion/react';

export const feedbackStyled = css`
    padding: 0 35px;
    h3 {
        margin-bottom: 7px;
        font-weight: 400;
        font-size: 1.3rem;
    }
    select {
        width: 100%;
        padding: 14px 13px;
        option {
            font-weight: 400;
            font-size: 13px;
            color: #292d32;
        }
    }
    .type {
        margin-bottom: 18px;
        margin-top: 40px;
    }
    textarea {
        resize: none;
        border: 1px solid #000;
        width: 100%;
        padding: 17px 13px;
        height: 379px;
        &::placeholder {
            color: #a7a7a7;
        }
    }
    span {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.3;
        color: #292d32;
        margin-top: 14px;
    }

    .buttonWrap {
        display: flex;
        justify-content: center;
        button {
            background: #000000;
            color: #ffffff;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 22px;
            text-align: center;
            padding: 0.4rem 2.3rem;
            margin-top: 50px;
        }
    }
`;
