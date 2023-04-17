import { css } from '@emotion/react';
import colors from '@/styles/color';

export const BookMarkIconStyle = () => css`
    .notFill {
        svg {
            fill: #fff;
        }
    }
`;

export const HomeMenu = () => css`
    display: flex;
    width: 100%;
    padding: 20px 20px;
    border-bottom: 1px solid red;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: ${colors.WHITE};
    z-index: 50;
    h1 {
        font-size: 1.6rem;
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

export const PostStyle = () => css`
    overflow-y: auto;
    padding: 0 20px;
    background: #fff;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
    .postHeaderWrap {
        padding: 35px 0px 0;
    }
    .postTitle {
        font-size: 1.4rem;
    }
`;

export const PostContent = () => css`
    font-weight: 300;
    font-size: 1.4rem;
    color: ${colors.BLACK};
    padding: 57px 33px;
`;

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
