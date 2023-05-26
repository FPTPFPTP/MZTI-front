import { css } from '@emotion/react';
import color from '@/styles/color';

export const WriteStyle = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    button {
        font-size: 20px;
    }
    .writeTitle {
        font-weight: 300;
        font-size: 14px;
        letter-spacing: -0.408px;
        color: #545456;
    }
    .writeNum {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.408px;
        color: #000000;
        margin-top: 1px;
    }
`;

export const ProfileStyle = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 20px;
    .mbtiNlevel {
        display: flex;
        .mbti {
            border-radius: 55px;
            display: inline-block;
            padding: 4px 8px;
            font-weight: 700;
            font-size: 12px;
            margin-right: 5px;
        }
        .level {
            display: flex;
            border: 1px solid #a7a7a7;
            padding: 4px 8px;
            border-radius: 41px;
            font-size: 12px;
            font-weight: 700;
            line-height: 9px;
            color: #1b1e26;
            text-align: center;
            align-items: center;
        }
    }

    .nickname {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-top: 5px;
    }
    .desc {
        font-weight: 300;
        font-size: 12px;
        display: flex;
        align-items: center;
        letter-spacing: -0.408px;
        color: #545456;
        margin-top: 8px;
    }
    .photo {
        margin-right: 17px;
        text-align: center;
        span {
            font-size: 1.1rem;
        }
        & > div {
            border-radius: 50%;
            overflow: hidden;
            border: none;
        }
        p {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 2px solid ${color.BLACK};
            box-sizing: border-box;
            overflow: hidden;
        }
        span {
            text-align: center;
        }
    }
`;

export const MenuStyle = css`
    background: #fff;
    padding: 0 36px;
    li {
        border-bottom: 1px solid #ebebeb;
        &:last-child {
            border-bottom: none;
        }
        a {
            font-weight: 500;
            font-size: 15px;
            line-height: 15px;
            display: flex;
            letter-spacing: -0.408px;
            color: #545456;
            padding: 17px 10px;
            align-items: center;
            .icon {
                margin-right: 20px;
            }
        }
        strong {
            color: ${color.GRAY_BRIGHT_2};
            margin-left: 1rem;
            font-weight: 300;
            font-size: 1.1rem;
        }
    }
`;

export const ListItemStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 9px;
    background: none;
    border-bottom: 1px solid ${color.GRAY_ORIGIN_1};
    font-size: 1.2rem;
    font-weight: 500;
    color: ${color.BLACK};
    cursor: pointer;
    &:hover {
        background: ${color.GRAY_LIGHT_1};
    }
    .id {
        margin-right: 10px;
    }
    .thumbnail {
        width: 73px;
        margin-right: 10px;
    }
    .title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -0.408px;
        color: #545456;
    }
    .date {
        font-weight: 300;
        font-size: 12px;
        letter-spacing: -0.408px;
        color: #545456;
    }
`;
export const ListBoardItemStyle = css`
    display: block;
    width: 100%;
    border-top: 1px solid ${color.GRAY_BRIGHT_5};
    padding: 22px 20px;
    &:hover {
        background: ${color.GRAY_LIGHT_1};
    }
    .title {
        font-size: 17px;
        font-weight: 700;
        line-height: 17px;
        text-align: left;
    }
    .date {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        text-align: left;
        color: #54545680;
    }
    .content {
        .line-clamp-5 {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            width: 100%;
            & > * {
                font-size: 14px;
                font-weight: 500;
                line-height: 21px;
                text-align: left;
                color: #545456;
                em {
                    font-style: normal !important;
                    font-weight: 500;
                    color: #545456;
                }
                img {
                    display: none;
                }
            }
        }
        .line-clamp-5:not(:last-child)::after {
            content: '더보기';
            display: block;
            text-align: center;
            color: #007bff;
            cursor: pointer;
        }
    }

    .vote {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        padding: 36px 34px;
        gap: 24px;
        background: #f9f9f9;
        font-size: 13px;
        font-weight: 300;
        line-height: 16px;
        div {
            display: flex;
            align-items: center;
            gap: 6px;
            p {
                width: 55px;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
            }
        }
    }
    .thumbnail {
        width: 100%;
        max-height: 400px;
        margin-top: 20px;
        object-fit: fill;
    }
    .bottom {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        color: #54545680;
        div {
            display: flex;
            gap: 10px;
        }
    }
`;

export const ListCommnetItemStyle = css`
    display: block;
    width: 100%;
    border-top: 1px solid ${color.GRAY_BRIGHT_5};
    padding: 22px 20px;
    &:hover {
        background: ${color.GRAY_LIGHT_1};
    }
    .title {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        width: 100%;
        font-size: 17px;
        font-weight: 700;
        line-height: 17px;
        text-align: left;
    }
    .date {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        text-align: left;
        color: #54545680;
    }
    .thumbnail {
        width: 100%;
        height: auto;
        max-height: 400px;
        margin-top: 20px;
        object-fit: fill;
    }
    .bottom {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        color: #54545680;
        div {
            display: flex;
            gap: 10px;
        }
    }
`;
export const ListBoxStyle = css`
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 220.5px);
    background: none;
    margin-top: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const EmptyStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
    .title {
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        color: #1b1e26;
    }
    .sub_title {
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        color: #545456;
        margin-bottom: 90px;
        margin-top: 20px;
        white-space: pre-line;
        text-align: center;
        line-height: 21px;
    }
    .icon {
        margin-bottom: 34px;
        margin-top: 120px;
    }
    .icon {
        margin-bottom: 34px;
        margin-top: 120px;
    }
    .icon {
        margin-bottom: 34px;
        margin-top: 120px;
    }
    .icon {
        margin-bottom: 34px;
        margin-top: 120px;
    }
`;

export const BannerStyle = css`
    display: inline-block;
    position: relative;
    height: 100px;
    width: 100%;
    border-radius: 13px;
    overflow: hidden;
`;

export const DepthMenuStyle = css`
    .depthWrap {
        margin-top: 50px;
    }
    .typetitle {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.408px;
        color: #1b1e26;
    }
    .typetitle {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.408px;
        color: #1b1e26;
        padding-left: 20px;
        margin-bottom: 50px;
    }
    .list {
        padding: 0 30px;
        .stitle {
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
            color: #1b1e26;
        }
    }
    button {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        &.advertisement {
            padding: 0 30px;
            .stitle {
                font-weight: 400;
                font-size: 15px;
                line-height: 15px;
                color: #1b1e26;
            }
        }
    }
`;

export const LogoutModal = css`
    height: 24vh;
    position: relative;
    button {
        position: absolute;
        bottom: 0;
    }
    .desc {
        font-weight: 500;
        font-size: 15px;
        color: #545456;
        margin-bottom: 20px;
        padding-left: 20px;
    }
    .email {
        display: flex;
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        color: #1b1e26;
        padding-left: 20px;
        svg {
            margin-right: 14.6px;
        }
    }
`;

export const EtcStyle = css`
    height: 100vh;
`;
