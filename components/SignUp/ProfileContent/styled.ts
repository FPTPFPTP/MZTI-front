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
    gap: 1rem;
`;

export const AvatarWrap = css`
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    input {
        display: none;
    }
`;

export const UploadWrap = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    backgroundcolor: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
