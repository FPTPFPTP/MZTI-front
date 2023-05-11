import { css } from '@emotion/react';

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
