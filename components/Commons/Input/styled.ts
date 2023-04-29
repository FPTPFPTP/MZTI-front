import { css } from '@emotion/react';
import colors from '@/styles/color';

export const InputWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid ${colors.BLACK};
    padding: 4px 8px;
    gap: 0.5rem;
`;

export const InputCss = css`
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    &::placeholder {
        color: rgba(27, 30, 38, 0.5);
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
    background: #e8e8ea;
    border-radius: 10px;
    padding: 10px 15px;
    gap: 10px;
    svg {
        path {
            fill: ${colors.GRAY_ORIGIN_1};
        }
    }
`;
