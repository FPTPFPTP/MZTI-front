import { css } from '@emotion/react';

export const HomeMenu = () => css`
    display: flex;
    width: 100%;
    padding: 33px;

    justify-content: space-between;
    h1 {
        font-size: 1.6rem;
    }
    .right {
        display: flex;
        .alarm {
            margin-right: 20px;
        }
        a {
            font-size: 1.6rem;
            color: #000;
        }
    }
`;

export const PostStyle = () => css`
    overflow-y: auto;
    padding: 0 32px;
    height: calc(100vh - 168px);
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
    color: #000000;
    padding: 57px 33px;
`;

export const searchWrap = () => css`
    padding: 0 33px;
`;
