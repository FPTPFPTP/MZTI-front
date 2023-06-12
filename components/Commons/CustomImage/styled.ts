import { css } from '@emotion/react';

export const CustomImageWrapStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 15px 0px;
    .image {
        position: relative;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;
