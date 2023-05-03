import { css } from '@emotion/react';
import colors from '@/styles/color';

export const BookMarkIconStyle = () => css`
    .notFill {
        svg {
            fill: ${colors.WHITE};
        }
    }
`;

export const PostContentStyle = () => css`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const PostStyle = () => css`
    padding: 20px;
    background: ${colors.WHITE};

    .postTitle {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #1b1e26;
    }
    .time {
        font-weight: 300;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.408px;
        color: #545456;
        margin-top: 10px;
    }
`;
