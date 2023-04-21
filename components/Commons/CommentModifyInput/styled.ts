import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    position: sticky;
    background: ${color.GRAY_LIGHT_5};
    padding: 15px 20px;
    height: 80px;
    min-width: 375px;
    max-width: 600px;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        width: 80%;
    }
    .image_box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        position: absolute;
        top: -150px;
        left: 0;
        width: 100%;
        height: 150px;
        padding: 8px;
        z-index: 0;
        background: rgba(0, 0, 0, 0.8);
        button {
            position: absolute;
            top: 10px;
            svg {
                path {
                    fill: ${color.WHITE};
                }
            }
        }
        img {
            margin-right: 30px;
        }
    }
`;
