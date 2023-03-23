import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = css`
    position: relative;
`;

export const TagSearchWrapStyle = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${colors.GRAY_LIGHT_2};
    box-shadow: ${colors.BOX_SHADOW};
    border: none;
    border-radius: 25px;
    padding: 0 16px;
    gap: 8px;
    z-index: 100;
`;

export const TagSearchDropdownStyle = css`
    overflow: auto;
    position: absolute;
    top: 30px;
    width: 100%;
    min-height: 200px;
    max-height: 300px;
    padding: 20px;
    background: ${colors.GRAY_LIGHT_1};
    .active {
        display: none;
    }
`;

export const TagSearchDropdownItemStyle = css`
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        background: ${colors.GRAY_BRIGHT_1};
        box-shadow: ${colors.BOX_SHADOW};
    }
`;
