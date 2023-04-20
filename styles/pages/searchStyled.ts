import { css } from '@emotion/react';
import colors from '@/styles/color';

export const searchWrap = () => css`
    padding: 22px 20px 0;
    background-color: ${colors.WHITE};
    .search__box {
        position: relative;
        button {
            position: absolute;
            right: 30px;
            top: 25px;
        }
    }
    .search__filter {
        display: flex;
        justify-content: space-between;
        color: ${colors.GRAY_ORIGIN_1};
        padding: 17px 0;
    }
`;

export const recentSearchWrap = () => css`
    border-top: 4px solid ${colors.GRAY_BRIGHT_2};
    .recent__wrap {
        padding: 17px 34px;
    }
    .recent__search--top {
        display: flex;
        justify-content: space-between;
        color: ${colors.GRAY_ORIGIN_1};
    }
    .recent__search--desc {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.GRAY_ORIGIN_1};
        height: 65vh;
    }
`;
