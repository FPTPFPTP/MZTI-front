import { css } from '@emotion/react';

export const ReplayCommentStyled = css`
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 130px);
    padding: 0px 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
