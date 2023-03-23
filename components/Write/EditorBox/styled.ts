import { css } from '@emotion/react';
import colors from '@styles/color';

export const Layout = css`
    position: relative;
    height: 100vh;
    padding: 0px 20px;
`;

export const KeywordWrapStyle = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 50px;
    background: ${colors.GRAY_LIGHT_1};
    padding: 4px 8px;
    gap: 8px;
    > button {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${colors.GRAY_ORIGIN_1};
        svg {
            width: 16px;
            height: 16px;
            fill: ${colors.GRAY_ORIGIN_1};
        }
        &:hover {
            transform: scale(1.01);
            color: ${colors.BLACK};
            svg {
                fill: ${colors.BLACK};
            }
        }
    }
`;
