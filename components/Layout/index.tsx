import React from 'react';
import { css } from '@emotion/react';

const Layout: React.FC<any> = (props) => {
    const { children } = props;
    return <div css={StyledLayout}>{children}</div>;
};

export default Layout;

const StyledLayout = css`
    min-width: 300px;
    max-width: 767px;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid #000000;
`;
