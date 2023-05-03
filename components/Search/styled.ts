import { css } from '@emotion/react';
import colors from '@styles/color';

export const SearchHistoryItemStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid ${colors.GRAY_BRIGHT_5};
    cursor: pointer;
    color: ${colors.BUTTON_TEXT};
    > span {
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
    }
    > div {
        display: flex;
        gap: 10px;
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        svg {
            path {
                fill: ${colors.GRAY_ORIGIN_1};
            }
        }
    }
`;
