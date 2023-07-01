import { css } from '@emotion/react';

export const CustomImageWrapStyle = (isSelect?: boolean) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 15px 0px;
    padding: 15px;
    border: 2px solid ${isSelect ? '#000000' : '#cccccc'};
    .image {
        position: relative;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .image_delete {
        position: absolute;
        top: 0px;
        right: -2px;
        z-index: 10;
    }
`;
