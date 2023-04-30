import { css } from '@emotion/react';
import colors from '@/styles/color';

export const HomeMenuStyle = ({ isCurrentScrollTop }: { isCurrentScrollTop: boolean }) => css`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    box-shadow: ${!isCurrentScrollTop && '0px 2px 4px 0px #00000033'};

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
        .alarm {
            margin-right: 20px;
        }
        a {
            font-size: 1.6rem;
            color: ${colors.BLACK};
        }
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
