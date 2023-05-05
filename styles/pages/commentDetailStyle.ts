import { css } from '@emotion/react';
import colors from '@/styles/color';

export const ReplayCommentStyled = css`
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 292px);
    padding: 0px 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const DeletedComment = css`
    font-weight: 400;
    font-size: 1.2rem;
    color: ${colors.GRAY_STRONG};
    padding: 1rem 20px;
    border-bottom: 0.5px solid ${colors.GRAY_ORIGIN_1};
    &.reComment {
        background: ${colors.GRAY_LIGHT_5};
        display: flex;
        span {
            margin-left: 10.5px;
        }
    }
`;
