import { css } from '@emotion/react';
import colors from '@/styles/color';

export const InputWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;
    padding: 4px 8px;
    gap: 0.5rem;
`;

export const InputCss = css`
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    &::placeholder {
        color: #54545680;
    }

    &:focus {
        outline: none !important;
    }
`;

export const BorderlessWrapCss = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${colors.BLACK};
    gap: 0.5rem;
    padding: 4px 8px;
    svg {
        path {
            fill: ${colors.GRAY_ORIGIN_1};
        }
    }
`;

export const SeachWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    gap: 8px;
    background: #7676801f;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    input {
        padding: 0px;
        color: #3c3c4399;
    }
    svg {
        path {
            fill: #848488;
        }
    }
`;
