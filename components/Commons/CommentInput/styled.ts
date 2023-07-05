import color from '@/styles/color';
import { css } from '@emotion/react';

export const CommentInputStyle = css`
    display: flex;
    position: sticky;
    align-items: flex-start;
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
    .text_wrap {
        width: 95%;
        padding: 0px 24px 0px 8px;
        textarea {
            width: 100%;
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
            color: #545456;
            &::placeholder {
                color: #54545680;
            }
        }
    }

    .comment_btn {
        display: inline-block;
        position: absolute;
        right: 20px;
        top: 25px;
    }
`;
