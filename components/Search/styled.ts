import { css } from '@emotion/react';
import colors from '@styles/color';

export const SearchHistoryItemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 0px;
    cursor: pointer;
    > div {
        display: flex;
        gap: 25px;
        color: ${colors.GRAY_ORIGIN_1};
        svg {
            path {
                fill: ${colors.GRAY_ORIGIN_1};
            }
        }
    }
`;
