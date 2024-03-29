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
    overflow-y: auto;
    height: calc(100vh - 165px);
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
    .postTags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 20px 0px 0px;
        gap: 8px;
    }
`;

export const MbtiContent = () => css`
    margin-top: 20px;
    li {
        margin-bottom: 20px;
        h4 {
            display: inline-block;
            margin-right: 6px;
            padding: 4px 8px;
            border-radius: 41px;
            color: #1b1e26;
            font-size: 12px;
            font-weight: 700;
            line-height: 9px;
            text-align: center;
        }
        p {
            margin-top: 5px;
        }
    }
`;
