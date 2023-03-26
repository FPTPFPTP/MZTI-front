import { css } from '@emotion/react';

export const ListTabStyle = css`
    display: flex;
    justify-content: space-around;
    button {
        font-weight: 500;
        font-size: 1.3rem;
        padding: 15px 0 11px;
        width: 100%;
        border-bottom: 2px solid #a7a7a7;
        &.active {
            border-bottom: 2px solid #000000;
        }
    }
`;
