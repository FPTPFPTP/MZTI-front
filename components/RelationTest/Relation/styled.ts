import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        padding: 64px 0 30px 0;
        text-align: center;
        color: ${colors.BLACK};
        margin: 0 !important;
        width: 100%;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        .input-container {
            position: relative;
            height: 100px;
            .radio-button {
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                margin: 0;
                cursor: pointer;
            }

            .radio-tile {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                padding: 14px 20px;
                border: 1px solid ${colors.BLACK};
                border-radius: 30px;
            }
            .radio-tile-label {
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: center;
            }

            //active tile styles
            .radio-button:checked + .radio-tile {
                background-color: ${colors.BUTTON_MBTI_ACTIVE};
                border: 2px solid ${colors.BLACK};
                color: white;
            }
        }
    }
`;
