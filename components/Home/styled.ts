import { css } from '@emotion/react';
import colors from '@/styles/color';

export const FeedComentsWrapStyle = css`
    background-color: ${colors.WHITE};
`;

export const ListTabStyle = css`
    display: flex;
    justify-content: space-around;
    background-color: ${colors.WHITE};
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
        padding: 18px 20px;
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
        }
        .more {
            font-weight: 600;
            margin-left: 10px;
        }
        .hotlist {
            margin-right: 10px;
            padding: 6px 12px;
            border-radius: 21.5px;
            margin-bottom: 8px;
            background-color: ${colors.WHITE};
            color: ${colors.GRAY_STRONG_3};
            font-size: 1rem;
            font-weight: 400;
        }
    }
`;

export const FeedNoComentsStyle = css`
    color: rgba(0, 0, 0, 0.45);
    padding-top: 69px;
    text-align: center;
    padding-bottom: 245px;
    background-color: ${colors.WHITE};
`;

export const FeedComentsStyle = css`
    display: flex;
    padding: 1.6rem 20px 1.4rem 20px;
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
    background-color: ${colors.GRAY_BRIGHT_4};
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    button {
        padding: 14px 0;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            margin-left: 7px;
            font-size: 1.1rem;
            color: ${colors.GRAY_STRONG_6};
        }
    }
`;
export const CommentItemSylte = css`
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    .commentItemWrap {
        padding: 1rem 20px;
        background-color: ${colors.WHITE};
        &.replay {
            padding: 1rem 20px 1rem 40px;
            background-color: ${colors.GRAY_LIGHT_5};
        }
    }
    .writer {
        display: flex;
        font-size: 1.3rem;
        align-items: center;
        .css-3nludd-Avatar {
            overflow: hidden;
        }
    }
    .mbti {
        font-size: 1.3rem;
        border: 1px solid ${colors.GRAY_ORIGIN_1};
        border-radius: 55px;
        padding: 1px 9px;
        margin-left: 11px;
    }
    .nickName {
        font-size: 1.1rem;
        font-weight: 300;
        display: flex;
        align-items: center;
        & > span {
            margin-left: 5px;
        }
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
            display: flex;
            align-items: center;
            svg {
                margin-right: 5px;
            }
        }
        .reComment {
            display: flex;
            align-items: center;
            svg {
                margin-right: 5px;
            }
        }
    }
`;

export const FeedItemStyle = css`
    background: ${colors.WHITE};
    .feedLayout {
        border-bottom: 4px solid ${colors.GRAY_BRIGHT_2};
        .feedLayout__bg {
            background: ${colors.WHITE};
            padding: 0 20px;
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
    padding: 12px 0;
    border-top: 0.5px solid ${colors.GRAY_ORIGIN_1};
    background-color: ${colors.WHITE};
    a,
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
        margin-bottom: 20px;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-weight: 300;
        font-size: 1.2rem;
        & > * {
            font-weight: 300;
            font-size: 1.2rem;
            color: ${colors.GRAY_STRONG_2};
            em {
                font-style: normal !important;
                font-weight: 300;
            }
            p {
                font-size: 1.2rem;
                font-weight: 300;
                color: ${colors.GRAY_STRONG_2};
            }
        }
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }
    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    img {
        margin-top: 20px;
    }
    .vote {
        background: ${colors.GRAY_LIGHT_4};
        padding: 20px;
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

export const DeletedComment = css`
    font-weight: 400;
    font-size: 1.2rem;
    color: ${colors.GRAY_STRONG};
    padding: 1rem 20px;
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    &.reComment {
        background: ${colors.GRAY_LIGHT_5};
        display: flex;
        span {
            margin-left: 10.5px;
        }
    }
`;

export const ReplayCommentStyled = css`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .ReplayCommentWrap {
        background-color: ${colors.WHITE};
        min-width: 375px;
        max-width: 600px;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    }
    .commentWrap {
        height: 100%;
        padding-bottom: 80px;
    }
`;
