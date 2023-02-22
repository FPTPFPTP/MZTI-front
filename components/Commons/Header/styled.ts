import { css } from '@emotion/react';

export const HeaderContainer = css`
    height: 80px;
    padding: 4px 16px;
    width: 100%;
    text-align: left;
    position: sticky;
    left: 0;
    display: flex;
    top: 0;
    background: #fff;
    align-items: center;
    z-index: 9999;
    h1 {
        text-align: center;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 700;
    }
`;
