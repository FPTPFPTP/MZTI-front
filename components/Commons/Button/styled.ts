import { css } from '@emotion/react';
import colors from '@styles/color';

const DefaultStyle = css`
    width: 100%;
    min-width: 180px;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    white-space: nowrap;
`;

export const BaseButtonStyle = css`
    ${DefaultStyle};
    background: ${colors.BUTTON_NEXT};
    color: ${colors.WHITE};
    height: 56px;
    border-radius: 10px;
    padding: 13px 20px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    &:disabled {
        background: ${colors.BUTTON_DISABLE};
    }
`;

export const LinkButtonStyle = css`
    background: ${colors.BLACK};
    color: ${colors.WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    font-size: 1.2rem;
    padding: 7px 38px;
    &:disabled {
        background: ${colors.GRAY_BRIGHT_1};
        cursor: not-allowed;
        &:hover {
            transform: scale(1);
        }
    }
`;

export const TextButtonStyle = css`
    ${DefaultStyle};
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    text-decoration-line: underline;
    color: ${colors.BUTTON_TEXT};
`;

export const BottomButtonStyle = css`
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${colors.BLACK};
    color: ${colors.WHITE};
    height: 80px;
    min-width: 375px;
    max-width: 600px;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
`;
