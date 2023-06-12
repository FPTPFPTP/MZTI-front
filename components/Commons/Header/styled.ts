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
    padding-right: 20px;
    z-index: 10;
    background-color: ${isBgWhite ? colors.WHITE : '#f8f8f8'};
    ${isBorderLine && 'border-bottom: 1px solid #ebebeb;'}

    .preButton {
        padding: 0 20px;
        height: 100%;
    }
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
