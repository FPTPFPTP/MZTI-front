import { css } from '@emotion/react';
const Splash = () => {
    return <h1 css={SplashContent}>MZ 세대를 위한 MBTI 소셜 네트워킹</h1>;
};

export default Splash;

const SplashContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    justify-content: center;
`;
