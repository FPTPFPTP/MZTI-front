import { css } from '@emotion/react';

export const ProfileStyle = css`
    display: flex;
    align-items: center;
    .mbti {
        border: 1px solid #000000;
        border-radius: 55px;
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background: #fff;
        font-weight: 700;
        font-size: 1.1rem;
    }
    .nickname {
        font-weight: 600;
        font-size: 1.7rem;
        margin: 8px 0;
    }
    .desc {
        font-weight: 400;
        font-size: 1.2rem;
        margin-top: 5px;
    }
    .photo {
        margin-right: 30px;
        text-align: center;
        span {
            font-size: 1.1rem;
        }
        & > div {
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #000;
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
