import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileCard = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 600px;
    border: 2px solid ${colors.PRIMARY};
    border-radius: 25px;
    padding: 20px;
`;

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
