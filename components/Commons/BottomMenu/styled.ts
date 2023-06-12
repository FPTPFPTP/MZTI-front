import color from '@/styles/color';
import { css } from '@emotion/react';

export const BottomButtonStyle = css`
    height: 83px;
    width: 100%;
    ul {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 1000px;
        height: 83px;
        z-index: 50;
        background: ${color.WHITE};
        border-top: 0.5px solid rgba(60, 60, 67, 0.36);
        justify-content: space-around;
        align-items: center;
        padding-bottom: 30px;
        overflow: hidden;
        box-sizing: border-box;
    }
    li {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;

        svg {
            font-size: 1.6rem;
            path {
                fill: #8a8a8e;
            }
        }
        a {
            color: #8a8a8e;
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
        span {
            color: #8a8a8e;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: -0.24px;
            margin-top: 6px;
        }
        &.active {
            svg {
                path {
                    fill: ${color.POINT_COLOR} !important;
                }
            }
            a {
                color: #292d32 !important;
            }
        }
    }
`;
