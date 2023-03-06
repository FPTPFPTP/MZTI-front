import { css } from '@emotion/react';

export const ListBoxCss = css`
    overflow-y: auto;
    width: 100%;
    height: calc(100% - 168px);
    background: none;
    margin-top: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
