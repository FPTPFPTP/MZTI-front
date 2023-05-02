import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

const Layout: React.FC<any> = (props) => {
    const { children } = props;
    return <div css={StyledLayout}>{children}</div>;
};

export default Layout;

const StyledLayout = css`
    background-color: ${color.WHITE};
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`;
