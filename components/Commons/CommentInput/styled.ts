import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    display: flex;
    position: sticky;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 80px;
    padding: 20px;
    background: ${color.WHITE};
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 13px;
    font-weight: 500;
    line-height: 13px;
    text-align: left;
    .image_box {
        position: relative;
        overflow: hidden;
        width: 20px;
        height: 20px;
        border-radius: 2px;
    }
    div {
        width: 100%;
        z-index: 50;
        padding: 15px 20px;
    }
    textarea {
        margin: 13px 8px 0px;
        width: 100%;
    }

    .edit--input {
        width: 15%;
        display: flex;
        gap: 8px;
    }
`;
