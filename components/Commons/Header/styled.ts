import { css } from '@emotion/react';

export const HeaderContainer = css`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 80px;
    padding: 4px 16px;
`;

export const HeaderItem = (cols: number) => css`
    flex: ${cols};
    cursor: pointer;
`;
