import { css } from '@emotion/react';
import colors from '@styles/color';

export const MultiCarouselStyle = css`
    .react-multi-carousel-dot-list {
        margin-bottom: 10px;
        .react-multi-carousel-dot {
            button {
                border: 1px solid ${colors.BLACK};
                background: ${colors.WHITE};
            }
        }
        .react-multi-carousel-dot--active {
            button {
                border: none;
                background: ${colors.POINT_COLOR};
            }
        }
    }
`;
