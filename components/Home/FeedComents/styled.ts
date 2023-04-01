import { css } from '@emotion/react';
import colors from '@/styles/color';

export const FeedComentsStyle = css`
    display: flex;
    padding: 1.6rem 32px 1.4rem 35px;
    justify-content: space-between;
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    h4 {
        font-weight: 300;
        font-size: 1.3rem;
        color: ${colors.GRAY_ORIGIN_3};
    }
    button {
        display: flex;
        align-items: center;
        span {
            font-weight: 300;
            font-size: 1.3rem;
            color: ${colors.GRAY_ORIGIN_1};
            margin-right: 10px;
        }
    }
    .moreComment {
        border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    }
`;

export const MoreCommentStyle = css`
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    padding: 1.1rem 33px;
    button {
        display: flex;
        align-items: center;
        span {
            margin-left: 7px;
            font-size: 1.3rem;
        }
    }
`;
export const CommentItemSylte = css`
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    &:last-of-type {
        border-bottom: none;
        &::after {
            content: '';
            height: 80px;
            display: block;
            border-top: 0.5px solid ${colors.GRAY_ORIGIN_1};
        }
    }
    .commentItemWrap {
        padding: 1rem 33px;
    }
    .writer {
        display: flex;
        font-size: 1.3rem;
        align-items: center;
    }
    .mbti {
        font-size: 1.3rem;
        border: 1px solid ${colors.GRAY_ORIGIN_1};
        border-radius: 55px;
        padding: 1px 9px;
        margin-right: 8px;
        margin-left: 11px;
    }
    .nickName {
        font-size: 1.1rem;
        font-weight: 300;
    }
    .coment {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0.8rem 0;
    }
    .commentItemFooter {
        display: flex;
        color: ${colors.GRAY_ORIGIN_1};
        position: relative;
        align-items: center;
        .moreButton {
            position: absolute;
            right: 0;
        }
        .time {
            margin-right: 30px;
        }
        .like {
            margin-right: 30px;
        }
    }
`;
