import { css } from '@emotion/react';
import colors from '@/styles/color';

export const feedbackStyled = css`
    padding: 0 35px;
    .ant-select {
        width: 100% !important;
    }
    .selectOption {
        font-size: 1.1rem !important;
        color: ${colors.GRAY_DARK_2} !important;
    }

    .ant-select-selector {
        height: 50px !important;
    }
    .ant-select-arrow {
        margin-top: -12px !important;
    }
    h3 {
        margin-bottom: 7px;
        font-weight: 400;
        font-size: 1.3rem;
    }
    .type {
        margin-bottom: 18px;
        margin-top: 40px;
    }
    textarea {
        resize: none;
        border: 1px solid ${colors.BLACK};
        width: 100%;
        padding: 17px 13px;
        height: 379px;
        &::placeholder {
            color: ${colors.GRAY_ORIGIN_1};
        }
    }
    span {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.3;
        color: ${colors.GRAY_DARK_2};
        margin-top: 14px;
    }

    .buttonWrap {
        display: flex;
        justify-content: center;
        button {
            background: ${colors.BLACK};
            color: ${colors.WHITE};
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 22px;
            text-align: center;
            padding: 0.4rem 2.3rem;
            margin-top: 50px;
        }
    }
`;

export const feedbackWrapStyled = css`
    .buttonWrap {
        margin-top: 1rem;
        text-align: center;
    }
`;
