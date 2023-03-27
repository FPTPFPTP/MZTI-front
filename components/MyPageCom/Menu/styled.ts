import { css } from '@emotion/react';

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
            color: #ccc;
            margin-left: 1rem;
            font-weight: 300;
            font-size: 1.1rem;
        }
    }
`;
