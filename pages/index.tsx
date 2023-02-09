import type { NextPage } from 'next';
import { Spin } from 'antd';
import { css } from '@emotion/react';

const Home: NextPage = () => {
    return (
        <div>
            <Spin size="large" />
            <button css={BaseButtonStyle}>test</button>
        </div>
    );
};

export default Home;

export const BaseButtonStyle = css`
    height: 60px;
    background: #2656ff;
    color: #fafafa;
    font-size: 1.3rem;
    padding: 1em;
    box-sizing: border-box;
    white-space: nowrap;
`;
