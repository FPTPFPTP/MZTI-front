import { css } from '@emotion/react';
import color from '@/styles/color';

export const WriteStyle = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom: 27px;
    margin-top: 47px;
    button {
        font-size: 20px;
    }
    .writeTitle {
        font-size: 1.3rem;
        font-weight: 400;
    }
    .writeNum {
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: 14px;
    }
`;

export const ProfileStyle = css`
    display: flex;
    align-items: center;
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
            border: 3px solid ${color.BLACK};
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
    margin-top: 40px;
    li {
        padding: 0 20px;
        a {
            font-weight: 400;
            font-size: 1.3rem;
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
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
    margin-top: 100px;
    .title {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${color.BLACK};
    }
    .sub_title {
        margin-bottom: 24px;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${color.GRAY_ORIGIN_1};
        margin-top: 10px;
        white-space: pre-line;
        text-align: center;
    }
`;

export const BannerStyle = css`
    box-sizing: border-box;
    overflow: hidden;
    background-color: ${color.GRAY_LIGHT_6};
    min-width: 390px;
    padding: 2.2rem 1.8rem;
    h4 {
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 6px;
    }
    p {
        font-size: 1.2rem;
    }
`;
