import { css } from '@emotion/react';

export const Layout = css`
    position: relative;
    height: 100vh;
    padding-top: 80px;
`;

export const HeaderWrapper = css`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
`;

export const BodyWrapper = css`
    padding: 20px;
    height: calc(100% - 250px);
`;

export const FooterWrapper = css`
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 0.5rem;
`;
