import { css } from '@emotion/react';

export const InputWrap = css`
    display: flex;
    align-items: center;
    border: 1px solid #000000;
    padding: 4px 8px;
    gap: 0.5rem;
`;

export const InputStyle = css`
    width: 100%;
    padding: 8px;
    &:focus {
        outline: none !important;
    }
`;

export const BorderlessWrap = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000000;
    gap: 0.5rem;
    padding: 4px 8px;
`;
