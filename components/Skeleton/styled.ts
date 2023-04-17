import { css } from '@emotion/react';
import colors from '@styles/color';

export const SkeletonItem = css`
    @keyframes loading {
        0% {
            transform: translateX(0);
        }
        50%,
        100% {
            transform: translateX(600px);
        }
    }

    padding: 30px;
    position: relative;
    padding-bottom: 40px;
    background-color: ${colors.WHITE};

    .skeleton-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 17px;
    }

    .skeleton-img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }

    .skeleton-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #eeeeee;
        position: relative;
        overflow: hidden;
    }

    .skeleton-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
    }

    .skeleton-name {
        width: 58px;
        height: 14px;
        background: #f2f2f2;
        position: relative;
        overflow: hidden;
    }

    .skeleton-name::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }

    .skeleton-email {
        width: 100px;
        height: 21px;
        background: #f2f2f2;
        margin-top: 3px;
        position: relative;
        overflow: hidden;
    }

    .skeleton-email::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }

    .skeleton-content {
        width: 100%;
        height: 198px;
        background: #f2f2f2;
        position: relative;
        overflow: hidden;
    }

    .skeleton-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`;
