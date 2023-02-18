import React from 'react';
import { css } from '@emotion/react';

const Layout: React.FC<any> = (props) => {
    const { children } = props;
    return <div css={StyledLayout}>{children}</div>;
};

export default Layout;

const StyledLayout = css`
    min-width: 390px;
    height: 100vh;
    margin: 0 auto;
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;
    box-shadow: 5px 0 5px #eee;
`;
