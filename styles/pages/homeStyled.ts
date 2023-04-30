import { css } from '@emotion/react';
import colors from '@/styles/color';

export const BookMarkIconStyle = () => css`
    .notFill {
        svg {
            fill: #fff;
        }
    }
`;

export const PostStyle = () => css`
    padding: 0 20px;
    background: #fff;
    margin-bottom: 20px;
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

export const FeedContentStyle = () => css`
    padding: 0px 20px;
`;

export const searchWrap = () => css`
    padding: 22px 20px 0;
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
