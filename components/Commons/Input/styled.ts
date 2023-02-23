import { css } from '@emotion/react';
import colors from '@/styles/color';

export const InputWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #000000;
    padding: 4px 8px;
    gap: 0.5rem;
`;

export const InputCss = css`
    width: 100%;
    padding: 8px;
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
`;

export const SeachWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    border: 1px solid ${colors.GRAY_ORIGIN_1};
    border-radius: 46px;
    padding: 12px 25px;
`;
