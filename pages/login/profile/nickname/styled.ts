import { css } from '@emotion/react';

export const Layout = css`
    position: relative;
    height: 100vh;
`;

export const HeaderWrapper = css`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
    border-bottom: 1px solid #000000;
`;

export const BodyWrapper = css`
    padding: 20px;
    height: calc(100% - 13%);
    border-bottom: 1px solid #000000;
`;

export const FooterWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;
