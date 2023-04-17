import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    position: fixed;
    background: ${color.GRAY_LIGHT_5};
    padding: 15px 27px;
    height: 80px;
    min-width: 375px;
    max-width: 600px;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        width: 80%;
    }
`;
