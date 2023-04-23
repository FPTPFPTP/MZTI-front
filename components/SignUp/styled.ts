import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        padding: 64px 0 30px 0;
        text-align: left;
        color: ${colors.BLACK};
        margin: 0 !important;
        width: 100%;
    }
    .profile {
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .css-1eyqtt9 {
        border-bottom: 0.5px solid rgba(60, 60, 67, 0.29);

        input {
            font-weight: 400;
            font-size: 17px;
            line-height: 22px;
            &::placeholder {
                color: rgba(60, 60, 67, 0.3);
            }
        }
    }
`;

export const ContentWrap = css`
    width: 100%;
    .form-item-error {
        margin-top: 0.5rem;
        color: ${colors.RED_ORIGIN};
    }
`;

export const ContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        padding: 64px 0 30px 0;
        text-align: left;
        color: ${colors.BLACK};
        margin: 0 !important;
    }
`;

export const ProgressUl = css`
    overflow: hidden;
    counter-reset: step;
    li {
        list-style-type: none;
        color: white;
        text-transform: uppercase;
        width: 25%;
        float: left;
        position: relative;
        &::before {
            content: counter(step);
            counter-increment: step;
            width: 30px;
            padding: 4px 8px;
            font-size: 1.5rem;
            line-height: 20px;
            display: block;
            color: ${colors.GRAY_STRONG_4};
            background: white;
            border-radius: 3px;
            margin: 0 auto 5px auto;
            z-index: 11;
        }
        &:after {
            content: '';
            width: 84%;
            height: 4px;
            background: white;
            position: absolute;
            left: -42%;
            top: 9px;
            z-index: 10;
        }
        &:first-child:after {
            content: none;
        }
        &.active:before,
        &.active:after {
            background: #45d6c8;
            color: white;
        }
    }
`;
