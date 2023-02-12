import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RadioWrap = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RadioTileGroup = css`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    .input-container {
        position: relative;
        height: 7rem;
        width: 7rem;
        margin: 0.5rem;

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
            border: 2px solid ${colors.PRIMARY};
            border-radius: 5px;
            padding: 1rem;
            transition: transform 300ms ease;
        }

        .icon svg {
            fill: ${colors.PRIMARY};
            width: 3rem;
            height: 3rem;
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
            background-color: ${colors.PRIMARY};
            border: 2px solid ${colors.PRIMARY};
            color: white;
            transform: scale(1.1, 1.1);

            .icon svg {
                fill: white;
                background-color: ${colors.PRIMARY};
            }

            .radio-tile-label {
                color: white;
                background-color: ${colors.PRIMARY};
            }
        }
    }
`;
