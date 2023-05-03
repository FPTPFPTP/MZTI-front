import { css } from '@emotion/react';
import colors from '@/styles/color';

export const searchWrap = () => css`
    position: sticky;
    top: 80px;
    padding: 0px 20px;
    background-color: ${colors.WHITE};
    .search__box {
        position: relative;
        button {
            position: absolute;
            right: 30px;
            top: 25px;
        }
        padding-bottom: 18px;
        border-bottom: 1px solid ${colors.GRAY_BRIGHT_5};
    }
`;

export const recentSearchWrap = () => css`
    padding: 0px 20px;
    .recent__wrap {
        padding: 0px;
    }

    .recent__search--desc {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.GRAY_ORIGIN_1};
        height: 65vh;
    }
`;
