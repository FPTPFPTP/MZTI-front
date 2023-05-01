import { css } from '@emotion/react';
import colors from '@/styles/color';

export const FeedComentsWrapStyle = css`
    background-color: ${colors.WHITE};
`;

export const ListTabStyle = css`
    position: relative;
    width: 100%;
    padding: 0 20px;
    border-bottom: 2px solid ${colors.GRAY_ORIGIN_1};
    > div {
        display: flex;
        justify-content: space-around;
        position: relative;
        top: 1px;
    }
    button {
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        width: 100%;
        padding-bottom: 5px;
        &.active {
            border-bottom: 2px solid ${colors.BLACK};
        }
    }
`;

export const HotKeywordStyle = css`
    background: ${colors.WHITE};
    border-radius: 15px;
    margin: 10px 0;
    padding: 20px;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 17px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
        color: ${colors.GRAY_STRONG_6};
    }
    .keyword {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        li {
            display: inline-block;
            background: #f2f4f6;
            color: ${colors.GRAY_STRONG_6};
            padding: 7px 15px;
            border-radius: 13px;
            font-weight: 400;
            font-size: 12px;
            line-height: 12px;
            &.active {
                background: ${colors.GRAY_STRONG};
                color: ${colors.WHITE};
            }
        }
        .more {
            font-weight: 600;
            margin-left: 10px;
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
    .feedLayout {
        margin-bottom: 11px;
        .feedLayout__bg {
            background: ${colors.WHITE};
            border-radius: 15px;
            padding: 16px 20px;
        }
    }
`;

export const ItemHeaderStyle = css`
    width: 100%;
    position: relative;
    .userInfo {
        display: flex;
        align-items: center;
        .userInfo__profile {
            border-radius: 50%;
            overflow: hidden;
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
            width: 100%;
            padding-left: 11px;
            .userInfo__Text--layout {
                display: flex;
                justify-content: space-between;
            }
            .mbti {
                display: inline-block;
                margin-right: 6px;
                border: 1px solid ${colors.GRAY_ORIGIN_1};
                padding: 4px 8px;
                border-radius: 41px;
                color: ${colors.GRAY_STRONG};
                font-size: 12px;
                font-weight: 700;
                line-height: 9px;
                text-align: center;
            }
            .level {
                display: inline-block;
                border: 1px solid ${colors.GRAY_ORIGIN_1};
                padding: 4px 8px;
                border-radius: 41px;
                font-size: 12px;
                font-weight: 700;
                line-height: 9px;
                color: ${colors.GRAY_STRONG};
                text-align: center;
            }
            .nickname_time {
                display: flex;
                color: ${colors.GRAY_STRONG};
                justify-content: space-between;
                align-items: center;
                margin-top: 12px;
                .nickname {
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 15px;
                }
                .time {
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 15px;
                    color: #54545680;
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
    padding: 15px 0 0;
    border-top: 0.5px solid ${colors.GRAY_ORIGIN_1};
    background-color: ${colors.WHITE};
    span {
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        color: #54545680;
    }
    a,
    button {
        display: flex;
        align-items: center;
        gap: 15px;
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
    }
`;

export const ItemContentStyle = css`
    margin-top: 27px;
    .itemContent__title {
        font-size: 17px;
        font-weight: 700;
        line-height: 15px;
    }
    .itemContent__content {
        margin-bottom: 20px;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        & > * {
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            color: ${colors.GRAY_STRONG_6};
            em {
                font-style: normal !important;
            }
            img {
                display: none;
            }
        }
    }
    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        min-width: 280px;
        min-height: 150px;
        margin-bottom: 20px;
    }
    .vote {
        display: flex;
        align-items: center;
        background: #f2f4f6;
        border-radius: 10px;
        padding: 23px 30px;
        margin: 0 0 20px 0;
        gap: 10px;
        span {
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            color: ${colors.GRAY_STRONG_6};
            white-space: nowrap;
            margin-left: 10px;
        }

        .vote__title {
            flex: 2;
            overflow: hidden;
            width: 100%;
            margin-left: 10px;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: ${colors.GRAY_STRONG_6};
            white-space: nowrap;
            text-overflow: ellipsis;
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
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    }
    .commentWrap {
        height: 100%;
        padding-bottom: 80px;
    }
`;
