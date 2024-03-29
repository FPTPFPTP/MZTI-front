import { css } from '@emotion/react';
import colors from '@styles/color';

export const RadioWrapStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    .borderSolid {
        border-right: 2px solid #000;
    }
`;

export const RadioTileGroupStyle = css`
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    border-top: 2px solid black;
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
            border-left: 2px solid ${colors.BLACK};
            border-bottom: 2px solid ${colors.BLACK};
        }
        .radio-tile-label {
            text-align: center;
            font-size: 2.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: ${colors.PRIMARY};
        }

        //active tile styles
        .radio-button:checked + .radio-tile {
            background-color: ${colors.BUTTON_MBTI_ACTIVE};
            border: 2px solid ${colors.BLACK};
            color: white;
            svg {
                path {
                    fill: #fff;
                }
            }

            .icon svg {
                fill: white;
                background-color: ${colors.BUTTON_MBTI_ACTIVE};
            }

            .radio-tile-label {
                color: white;
                background-color: ${colors.BUTTON_MBTI_ACTIVE};
            }
        }
    }
`;
