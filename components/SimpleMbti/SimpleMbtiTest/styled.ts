import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .title {
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 32.5px; /* 130% */
        padding: 60px 0 30px 0;
        text-align: center;
        color: ${colors.BLACK};
        margin: 0 !important;
        width: 100%;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 246px;
        gap: 20px;
        .input-container {
            position: relative;
            width: 100%;
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
                background: #f56326;
                border-radius: 10px;
                color: white;
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
                background: ${colors.BUTTON_MBTI_ACTIVE};
                color: white;
            }
        }
    }
`;
