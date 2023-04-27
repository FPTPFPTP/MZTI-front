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
    .mbti {
        border: 1px solid ${color.BLACK};
        border-radius: 55px;
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background: ${color.WHITE};
        font-weight: 700;
        font-size: 1.1rem;
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
    }
    .date {
        font-size: 1rem;
        white-space: nowrap;
    }
`;

export const ListBoxStyle = css`
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 168px);
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
`;

export const BannerStyle = css`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 20px;
    border-radius: 13px;
    height: 100px;
    width: 100%;
    background-image: url('/images/mzti_intro.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
