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
        background: ${color.GRAY_LIGHT_5};
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
        justify-content: space-around;
        align-items: center;
    }
    li {
        svg {
            font-size: 1.6rem;
            color: ${color.GRAY_DARK_2};
        }
        a {
            color: ${color.BLACK};
        }
    }
`;
