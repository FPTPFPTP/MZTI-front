import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    display: flex;
    position: sticky;
    justify-content: space-around;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 58px;
    background: ${color.GRAY_LIGHT_5};
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
    .image_box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        position: absolute;
        top: -150px;
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
    div {
        width: 100%;
        z-index: 50;
        padding: 15px 20px;
    }

    input {
        width: 80%;
        font-weight: 400;
        font-size: 1.4rem;
    }
`;
