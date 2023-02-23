import { css } from '@emotion/react';

export const HeaderContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    padding: 4px 16px;
    z-index: 100;
`;

export const HeadingCss = () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: 600;
`;
