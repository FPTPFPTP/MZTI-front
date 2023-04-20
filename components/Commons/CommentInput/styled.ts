import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    height: 65px;
    flex: 0 0 65px;
    div {
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
        padding: 15px 20px;
    }

    input {
        width: 80%;
        font-weight: 400;
        font-size: 1.4rem;
    }
`;
