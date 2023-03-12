import { css } from '@emotion/react';

export const FeedItemStyle = css`
    background: #ccc;
    padding-top: 10px;
    padding-bottom: 90px;
    .feedLayout {
        padding: 0 1.4rem;
        background: #fff;
    }
`;

export const ItemHeaderStyle = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    position: relative;
    .userInfo {
        display: flex;
        align-items: center;
        .userInfo__profile {
            margin-right: 0.6rem;
            border-radius: 50%;
            border: 1px solid #444;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .userInfo__Text {
            .mbti {
                display: inline-block;
                margin-right: 10px;
                border: 1px solid #ccc;
                padding: 0.2rem 0.6rem;
                border-radius: 15px;
                margin-bottom: 0.4rem;
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
    padding: 0.6rem 0;
    border-top: 1px solid #ccc;
    background-color: #fff;
    button {
        svg {
            font-size: 1.5rem;
        }
        span {
            font-size: 0.8rem;
        }
    }
`;

export const ItemContentStyle = css`
    padding: 1rem 0;
    h4 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.6rem;
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
        display: flex;
        border: 1px solid #444;
        padding: 1rem 0.5rem;
        font-size: 1.4rem;
        align-items: center;
        justify-content: center;
        margin: 0.7rem 0 0.2rem 0;
        border-radius: 10px;
        svg {
            font-size: 1.7rem;
            margin-right: 0.4rem;
        }
    }
    .hashTag {
        li {
            display: inline-block;
            margin-right: 10px;
            border: 1px solid #ccc;
            padding: 0.4rem 0.6rem;
            border-radius: 15px;
            margin-top: 1rem;
        }
    }
`;
