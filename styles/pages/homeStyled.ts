import { css } from '@emotion/react';

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
