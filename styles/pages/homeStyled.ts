import { css } from '@emotion/react';

export const HomeMenu = () => css`
    display: flex;
    width: 100%;
    padding: 33px;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 50;
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
    border-bottom: 0.5px solid #a7a7a7;
    .postHeaderWrap {
        padding: 35px 32px 0;
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
