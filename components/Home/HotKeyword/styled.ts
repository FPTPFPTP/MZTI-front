import { css } from '@emotion/react';

export const HotKeywordStyle = css`
    padding: 1rem;
    background-color: #eee;
    .keyowordBox {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 1rem 0.8rem 0 0.8rem;
        background-color: #fff;
        &__header {
            position: relative;
            display: flex;
            justify-content: space-between;
        }
        .keyword {
            margin-top: 18px;
            li {
                display: inline-block;
                margin-right: 10px;
                border: 1px solid #ccc;
                padding: 0.4rem 0.6rem;
                border-radius: 15px;
                margin-bottom: 1rem;
            }
        }

        .keyowordBox__header--button {
            border: 1px solid #ccc;
            padding: 0.2rem;
        }
    }
    .filterList {
        position: absolute;
        top: 34px;
        right: 0;
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        padding: 0.4rem;
        li {
            margin: 0.4rem;
        }
    }
`;
