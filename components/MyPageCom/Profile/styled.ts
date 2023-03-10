import { css } from '@emotion/react';

export const ProfileStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    .mbti {
        border: 1px solid #000000;
        border-radius: 12px;
        display: inline-block;
        padding: 4px 6px;
        background: #fff;
    }
    .nickname {
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        margin: 8px 0;
    }
    .desc {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
    }
    .photo {
        margin-right: 30px;
        text-align: center;
        & > div {
            border-radius: 50%;
            overflow: hidden;
        }
        p {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 2px solid #000;
            box-sizing: border-box;
            overflow: hidden;
        }
        span {
            text-align: center;
        }
    }
`;
