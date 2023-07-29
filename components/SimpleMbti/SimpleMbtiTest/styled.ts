import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
    .title {
        padding: 60px 0 30px 0;
        margin: 0 !important;
        p {
            color: #000;
            text-align: center;
            font-family: Pretendard;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 32.5px; /* 130% */
            width: 100%;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
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
                color: var(--label-color-dark-primary, #fff);
                text-align: center;
                font-size: 17px;
                font-style: normal;
                font-weight: 500;
                line-height: 17px; /* 100% */
                letter-spacing: -0.408px;
            }

            //active tile styles
            .radio-button:checked + .radio-tile {
                background: ${colors.BUTTON_MBTI_ACTIVE};
                color: white;
            }
        }
    }
`;
