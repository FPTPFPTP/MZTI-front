import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 20px;
    }
    .name {
        width: 100%;
        margin: 81px 0 55px;
    }
    .mbti {
        width: 100%;
    }
`;
