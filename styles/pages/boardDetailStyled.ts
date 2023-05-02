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
    height: calc(100vh - 60px);
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
        font-size: 1.4rem;
        margin-bottom: 10px;
    }
`;
