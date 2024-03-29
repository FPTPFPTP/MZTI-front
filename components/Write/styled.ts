import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = css`
    position: relative;
`;

export const TagSearchWrapStyle = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    min-height: 50px;
    background: ${colors.GRAY_LIGHT_2};
    box-shadow: ${colors.BOX_SHADOW};
    border: none;
    border-radius: 25px;
    padding: 0 16px;
    gap: 8px;
    z-index: 100;
`;

export const TagSearchDropdownStyle = css`
    overflow: auto;
    position: absolute;
    top: 30px;
    width: 100%;
    min-height: 200px;
    max-height: 300px;
    padding: 20px;
    background: ${colors.GRAY_LIGHT_1};
    .active {
        display: none;
    }
`;

export const TagSearchDropdownItemStyle = css`
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        background: ${colors.GRAY_BRIGHT_1};
        box-shadow: ${colors.BOX_SHADOW};
    }
`;

export const ContentWrapStyle = css`
    overflow-y: auto;
    position: relative;
    width: 100%;
    height: calc(100vh - 243px);
    padding: 0px 20px;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const CategoryWrapStyle = css`
    display: inline-block;
    margin-top: 20px;
    padding: 14px 16px;
    border-bottom: 1px solid #3c3c434a;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    button {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`;
export const TitleWrapStyle = css`
    margin-top: 60px;
    color: #1b1e26;
    div {
        padding: 0px;
    }
    input {
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        &::placeholder {
            color: #1b1e2680;
        }
    }
`;

export const BodyWrapStyle = css`
    width: 100%;
    margin-top: 40px;
    textarea {
        width: 100%;
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #545456;
        &::placeholder {
            color: #54545680;
        }
    }
`;

export const KeywordWrapStyle = css`
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    color: #54545680;

    ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;
        color: #545456;
    }
    .keyword_input {
        padding: 7px 15px;
        background: #f2f4f6;
        border-radius: 13px;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;
        input {
            width: 100px;
        }
    }
    .keyword_add_btn {
        padding: 7px 15px;
        background: #f2f4f6;
        border-radius: 13px;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;
    }
`;
export const BottomWrapStyle = css`
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff;
`;

export const BottomBtnWrapStyle = css`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 4px 8px;
    gap: 8px;
    button {
        border: 1px solid ${colors.BLACK};
        border-radius: 4px;
        padding: 4px;
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover {
            transform: scale(1.01);
            background: ${colors.GRAY_ORIGIN_1};
        }
    }
`;

export const FactWrapStyle = css`
    padding: 0 20px 100px 20px;

    .notice {
        overflow: hidden;
        margin-top: 20px;
        border-radius: 13px;
        background-color: #545456;
        padding: 20px;
        margin-bottom: 15px;
        color: #fff;
        font-size: 16px;
        line-height: 1.3;
        font-weight: 400;
    }
`;

export const FactStyle = css`
    margin: 20px 0;

    h3 {
        font-size: 17px;
        font-weight: 700;
        line-height: 15px;
        margin-bottom: 10px;
        padding: 4px 8px;
        display: inline-block;
        border-radius: 13px;
    }
    input {
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        &::placeholder {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            color: rgba(60, 60, 67, 0.3);
        }
    }
`;

export const CategoryDrawerWrapStyle = css`
    .postDrawer__backdrop {
        z-index: 101;
    }
    .postDrawer {
        z-index: 105;
        height: 40vh;
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 30px 26px 30px 30px;
            .prev {
                display: flex;
                align-items: center;
                gap: 20px;
                button {
                    width: 9px;
                }
            }
            h3 {
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
            }
            button {
                width: 50px;
                height: 20px;
                display: flex;
                justify-content: right;
                align-items: center;
            }
        }
        .body {
            overflow-y: auto;
            height: 250px;
            margin: 20px 30px;
        }
    }
`;

export const CategoryMenuStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #545456;
    cursor: pointer;
    &:hover {
        background: ${colors.GRAY_LIGHT_1};
    }
`;

export const AddFeatureBoxStyle = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: #f8f8f8;
    gap: 20px;
    margin-top: 23px;
    padding: 15px 20px 50px;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #545456;
    button {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

export const YouTubeModalStyle = css`
    padding: 20px 20px;
    .state-message {
        text-align: left;
        color: ${colors.RED_ORIGIN};
        font-size: 13px;
        font-weight: 500;
        line-height: 12px;
        margin: 8px 8px 8px;
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.408px;
        .cancel {
            border-right: 0.5px solid rgba(0, 0, 0, 0.3);
            color: rgba(27, 30, 38, 0.5);
        }
        p {
            font-weight: 500;
            font-size: 13px;
            line-height: 18px;
            text-align: center;
            letter-spacing: -0.078px;
            color: #545456;
        }
    }
`;
