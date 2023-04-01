import { css } from '@emotion/react';
import colors from '@/styles/color';

export const ListTabStyle = css`
    display: flex;
    justify-content: space-around;
    button {
        font-weight: 500;
        font-size: 1.3rem;
        padding: 15px 0 11px;
        width: 100%;
        border-bottom: 2px solid ${colors.GRAY_ORIGIN_1};
        &.active {
            border-bottom: 2px solid ${colors.BLACK};
        }
    }
`;
