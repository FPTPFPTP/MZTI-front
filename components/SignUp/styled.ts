import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
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
            color: #333;
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

export const FlexStart = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto;
    margin-bottom: 0.5rem;
    gap: 4px;
    color: ${colors.GRAY_ORIGIN_1};
`;

export const RuleWrap = css`
    float: left;
    width: 100%;
    padding: 0 25px;
`;
