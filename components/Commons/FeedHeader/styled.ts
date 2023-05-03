import { css } from '@emotion/react';
import colors from '@/styles/color';

export const HomeMenuStyle = () => css`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: #f8f8f8;
    z-index: 99;

    .header {
        display: flex;
        width: 100%;
        z-index: 70;
        .header-contents-inner {
            display: flex;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .header-contents__left {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`;

export const SearchWrapStyle = () => css`
    margin-top: 20px;
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
