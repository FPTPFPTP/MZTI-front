import { css } from '@emotion/react';

export const ProgressLineBarContainer = css`
    width: 100%;
    height: 5px;
    background: #fff;
    border-radius: 31px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
`;

export const ProgressBar = css`
    width: 32%;
    height: 100%;
    background: #d9d9d9;
    border-radius: 10px;
    &.active {
        background: #8c939f;
    }
`;
