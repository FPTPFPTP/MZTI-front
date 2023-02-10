import { css } from '@emotion/react';

export const InputWrap = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000000;
    gap: 0.5rem;
`;

export const InputStyle = css`
    width: 100%;
    padding: 8px;
    &:active {
        border: none;
    }
    &:focus {
        outline: none !important;
    }
`;
