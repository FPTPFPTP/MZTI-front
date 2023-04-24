import color from '@/styles/color';
import { css } from '@emotion/react';

export const BottomButtonStyle = css`
    height: 65px;
    flex: 0 0 65px;
    ul {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 58px;
        z-index: 50;
        background: ${color.WHITE};
        border-top: 0.5px solid rgba(60, 60, 67, 0.36);
        justify-content: space-around;
        align-items: center;
    }
    li {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        svg {
            font-size: 1.6rem;
            color: ${color.GRAY_DARK_2};
        }
        a {
            color: ${color.BLACK};
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            span {
                font-weight: 500;
                font-size: 10px;
                line-height: 12px;
                text-align: center;
                letter-spacing: -0.24px;
                color: #1b1e26;
                margin-top: 6px;
            }
        }
    }
`;
