import { css } from '@emotion/react';
import colors from '@styles/color';

export const HeaderContainerStyle = (isBorderLine?: boolean, isBgWhite?: boolean) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    padding: 33px 20px;
    z-index: 9;
    background-color: ${isBgWhite ? colors.WHITE : '#f8f8f8'};
    ${isBorderLine && 'border-bottom: 1px solid #ebebeb;'}
`;

export const TitleStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
`;

export const RightWrapStyle = css`
    svg {
        width: 32px;
        height: 32px;
        fill: ${colors.BLACK};
    }
`;
