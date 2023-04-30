import { css } from '@emotion/react';
import colors from '@/styles/color';

export const BookMarkIconStyle = () => css`
    .notFill {
        svg {
            fill: ${colors.WHITE};
        }
    }
`;

export const PostStyle = () => css`
    padding: 0 20px;
    background: ${colors.WHITE};
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

export const FeedContentStyle = ({ isCurrentScrollTop }: { isCurrentScrollTop: boolean }) => css`
    padding: 0px 20px;
    height: calc(100vh - ${isCurrentScrollTop ? '206px' : '143px'});
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
