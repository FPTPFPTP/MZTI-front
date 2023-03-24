import { css } from '@emotion/react';

export const FeedItemStyle = css`
    background: #ccc;
    padding-bottom: 90px;
    .feedLayout {
        padding-top: 4px;
        .feedLayout__bg {
            background: #fff;
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
            border: 1px solid #444;
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
            .mbti {
                display: inline-block;
                margin-right: 6px;
                border: 1px solid #a7a7a7;
                padding: 1px 9px;
                border-radius: 41px;
                margin-bottom: 0.4rem;
                color: #8c8c8c;
                font-size: 1.2rem;
            }
            .level {
                font-size: 1.2rem;
                font-weight: 300;
                color: #8c8c8c;
            }
            .nickname_time {
                display: flex;
                font-weight: 300;
                font-size: 1.8rem;
                color: #8c8c8c;
                justify-content: space-between;
                align-items: center;
                .nickname {
                    font-weight: 300;
                    font-size: 1.3rem;
                    color: #8c8c8c;
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
            background-color: #fff;
            color: #000;
            font-size: 1.3rem;
            right: 0;
            button {
                border: 1px solid #ccc;
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
    border-top: 0.5px solid #a7a7a7;
    background-color: #fff;
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
        background: #f8f8f8;
        border-top: none;
        padding: 21px 0 23px;
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
        color: #444;
    }
    img {
        margin-top: 20px;
    }
    .vote {
        background: #f9f9f9;
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
                color: #000000;
            }
        }
        .vote__title {
            margin-left: 23px;
            font-weight: 300;
            font-size: 1.3rem;
            letter-spacing: 0.5px;
            color: #000000;
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
            background-color: #fff;
            line-height: 14px;
            text-align: center;
            color: #585858;
            font-size: 16px;
            border: 1px solid #bfbfbf;
        }
    }
`;
