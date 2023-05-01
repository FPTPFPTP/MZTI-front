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
    padding: 0px 20px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const PostStyle = () => css`
    margin-top: 20px;
    padding: 20px;
    background: ${colors.WHITE};

    .postTitle {
        font-size: 1.4rem;
        margin-bottom: 10px;
    }
`;
