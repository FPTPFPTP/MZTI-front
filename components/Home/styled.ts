import { css } from '@emotion/react';
import colors from '@/styles/color';

export const ListTabStyle = css`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    button {
        font-weight: 500;
        font-size: 1.3rem;
        padding: 15px 0 11px;
        width: 100%;
        border-bottom: 2px solid ${colors.GRAY_ORIGIN_1};
        &.active {
            border-bottom: 2px solid ${colors.BLACK};
        }
    }
`;

export const HotKeywordStyle = css`
    .keyowordBox__content {
        padding: 24px 35px 18px;
        background-color: ${colors.GRAY_LIGHT_5};
        h3 {
            font-weight: 500;
            font-size: 1.5rem;
            color: ${colors.BLACK};
        }
    }
    .keyword {
        margin-top: 18px;
        li {
            display: inline-block;
            margin-right: 10px;
            padding: 6px 12px;
            border-radius: 12.5px;
            margin-bottom: 6px;
            background-color: ${colors.WHITE};
            color: ${colors.GRAY_STRONG_3};
            font-size: 1.2rem;
        }
    }
`;

export const FeedComentsStyle = css`
    display: flex;
    padding: 1.6rem 32px 1.4rem 35px;
    justify-content: space-between;
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    background-color: ${colors.WHITE};
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
        background-color: ${colors.WHITE};
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

export const FeedItemStyle = css`
    background: ${colors.GRAY_BRIGHT_2};
    padding-bottom: 90px;
    .feedLayout {
        padding-top: 4px;
        .feedLayout__bg {
            background: ${colors.WHITE};
            padding: 0 33px;
        }
    }
`;

export const ItemHeaderStyle = css`
    width: 100%;
    padding: 20px 0;
    position: relative;
    .userInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .userInfo__profile {
            border-radius: 50%;
            overflow: hidden;
            margin-right: 0.6rem;
            border-radius: 50%;
            border: 1px solid ${colors.GRAY_STRONG_2};
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            & > div {
                width: 100%;
                height: 100%;
                img {
                    object-fit: cover;
                }
            }
        }
        .userInfo__Text {
            width: 86%;
            .userInfo__Text--layout {
                display: flex;
                justify-content: space-between;
            }
            .mbti {
                display: inline-block;
                margin-right: 6px;
                border: 1px solid ${colors.GRAY_ORIGIN_1};
                padding: 1px 9px;
                border-radius: 41px;
                margin-bottom: 0.4rem;
                color: ${colors.GRAY_STRONG};
                font-size: 1.2rem;
            }
            .level {
                font-size: 1.2rem;
                font-weight: 300;
                color: ${colors.GRAY_STRONG};
            }
            .nickname_time {
                display: flex;
                font-weight: 300;
                font-size: 1.8rem;
                color: ${colors.GRAY_STRONG};
                justify-content: space-between;
                align-items: center;
                .nickname {
                    font-weight: 300;
                    font-size: 1.3rem;
                    color: ${colors.GRAY_STRONG};
                }
                .time {
                    font-size: 1rem;
                }
            }
        }
    }
    .moreButton {
        .moreButton__box {
            position: absolute;
            background-color: ${colors.WHITE};
            color: ${colors.BLACK};
            font-size: 1.3rem;
            right: 0;
            button {
                border: 1px solid ${colors.GRAY_BRIGHT_2};
                padding: 0.2rem 0.6rem;
                font-size: 1rem;
                border-radius: 15px;
            }
        }
    }
`;

export const ItemFooterStyle = css`
    display: flex;
    justify-content: space-around;
    padding: 12px 0 21px;
    border-top: 0.5px solid ${colors.GRAY_ORIGIN_1};
    background-color: ${colors.WHITE};
    button {
        display: flex;
        align-items: center;
        span {
            font-weight: 300;
            font-size: 1.3rem;
            margin-left: 15px;
        }
    }
    .share {
        margin-left: 13px;
    }
    &.postFooter {
        background: ${colors.GRAY_LIGHT_3};
        border-top: none;
        padding: 21px 0 23px;
    }
    .viewIcon {
        display: flex;
        align-items: center;
        svg {
            margin-left: 1rem;
        }
        .count {
            font-weight: 300;
            font-size: 1.3rem;
            margin-left: 15px;
        }
    }
`;

export const ItemContentStyle = css`
    .itemContent__title {
        font-weight: 700;
        font-size: 1.5rem;
    }
    .itemContent__content {
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 20px;
        img {
            width: 100%;
        }
    }
    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p {
        font-size: 1rem;
        font-weight: 500;
        color: ${colors.GRAY_STRONG_2};
    }
    img {
        margin-top: 20px;
    }
    .vote {
        background: ${colors.GRAY_LIGHT_4};
        padding: 36px 34px;
        margin: 0 0 20px 0;
        display: flex;
        align-items: center;
        .vote__top {
            display: flex;
            align-items: center;
            font-weight: 400;
            p {
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 16px;
                letter-spacing: 0.5px;
                color: ${colors.BLACK};
            }
            svg {
                width: 23px;
                height: 23px;
            }
        }
        .vote__title {
            margin-left: 23px;
            font-weight: 300;
            font-size: 1.3rem;
            letter-spacing: 0.5px;
            color: ${colors.BLACK};
        }

        svg {
            font-size: 1.7rem;
            margin-right: 17px;
        }
    }
    .hashTag {
        margin-top: 1rem;
        li {
            display: inline-block;
            margin-right: 10px;
            padding: 6px 12px;
            border-radius: 15px;
            margin-bottom: 6px;
            background-color: ${colors.WHITE};
            line-height: 14px;
            text-align: center;
            color: ${colors.GRAY_STRONG_3};
            font-size: 16px;
            border: 1px solid ${colors.GRAY_ORIGIN_2};
        }
    }
`;
