import { css } from '@emotion/react';

export const FeedFilterStyle = css`
    position: relative;

    .feedFilterStyle--button {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #a7a7a7;
        padding: 11px 35px;
        display: flex;
        align-items: center;
        .text {
            margin-right: 8px;
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
