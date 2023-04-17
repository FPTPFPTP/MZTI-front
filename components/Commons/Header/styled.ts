import { css } from '@emotion/react';
import colors from '@styles/color';

export const HeaderContainerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    padding: 33px 20px;
    z-index: 100;
    background-color: ${colors.WHITE};
`;

export const TitleStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
    font-weight: 300;
`;

export const RightWrapStyle = css`
    svg {
        width: 32px;
        height: 32px;
        fill: ${colors.BLACK};
    }
`;
