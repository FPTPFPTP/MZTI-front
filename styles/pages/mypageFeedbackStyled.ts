import { css } from '@emotion/react';
import colors from '@/styles/color';

export const feedbackStyled = css`
    border-top: 0.5px solid #ebebeb;
    padding: 24px 20px;
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
        font-weight: 700;
        font-size: 17px;
        letter-spacing: -0.408px;
        color: #1b1e26;
        margin-bottom: 30px;
    }
    .type {
        margin-bottom: 30px;
        span {
            margin-top: 0;
        }
        .typeSelect {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 14px 26px;
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            text-align: left;
            color: rgba(60, 60, 67, 0.3);
            border-bottom: 1px solid rgba(60, 60, 67, 0.29);
            .active {
                color: #1b1e26;
            }
        }
    }
    input {
        border-bottom: 1px solid rgba(60, 60, 67, 0.29);
        width: 100%;
        padding: 16px 14px;
        &::placeholder {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            color: rgba(60, 60, 67, 0.3);
        }
    }
    span {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.3;
        color: ${colors.GRAY_DARK_2};
        margin-top: 14px;
    }
    .optionList {
        font-weight: 500;
        font-size: 15px;
        color: #545456;
        margin-bottom: 20px;
        margin-left: 10px;
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
    height: 100vh;
    .email {
        margin-top: 30px;
    }
    .buttonWrap {
        position: fixed;
        bottom: 30px;
        padding: 10px 20px;
        width: 100%;
        &-center {
            justify-content: center;
            align-items: center;
            p {
                margin-bottom: 17px;
                font-weight: 300;
                font-size: 12px;
                color: #545456;
            }
        }
    }
`;
