import { css } from '@emotion/react';

export const FeedContentStyle = () => css`
    padding: 0px 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
    .mbtiNotice {
        li {
            background: #ffffff;
            border-radius: 15px;
            padding: 10px 20px;
            margin-bottom: 15px;
            margin-top: 5px;
            a {
                display: flex;
                align-items: center;
            }
            span {
                margin-right: 6px;
            }
            p {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
`;
