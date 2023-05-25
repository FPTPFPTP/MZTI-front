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

export const ContentWrapStyle = css`
    position: relative;
    width: 100%;
    padding: 0px 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const FlexCenterStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-select-selector {
        font-size: 24px;
    }
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
export const BottomWrapStyle = css`
    position: sticky;
    bottom: 0;
    width: 100%;
`;

export const BottomBtnWrapStyle = css`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 4px 8px;
    gap: 8px;
    button {
        border: 1px solid ${colors.BLACK};
        border-radius: 4px;
        padding: 4px;
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover {
            transform: scale(1.01);
            background: ${colors.GRAY_ORIGIN_1};
        }
    }
`;

export const FactWrapStyle = css`
    padding: 0 20px 100px 20px;

    .notice {
        overflow: hidden;
        margin-top: 20px;
        border-radius: 13px;
        background-color: #545456;
        padding: 20px;
        margin-bottom: 15px;
        color: #fff;
        font-size: 16px;
        line-height: 1.3;
        font-weight: 400;
    }
`;

export const FactStyle = css`
    margin: 20px 0;

    h3 {
        font-size: 17px;
        font-weight: 700;
        line-height: 15px;
        margin-bottom: 10px;
        padding: 4px 8px;
        display: inline-block;
        border-radius: 13px;
    }
    input {
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        &::placeholder {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            color: rgba(60, 60, 67, 0.3);
        }
    }
`;
