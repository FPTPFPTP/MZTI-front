import { css } from '@emotion/react';
import GoogleAnalytics from '@components/Commons/GoogleAnalytics';

import color from '@/styles/color';

const Layout: React.FC<any> = (props) => {
    const { children } = props;
    return (
        <div css={StyledLayout} id={'layout'}>
            <GoogleAnalytics />

            {children}
        </div>
    );
};

export default Layout;

const StyledLayout = css`
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    background-color: ${color.WHITE};
    border: 1px solid ${color.GRAY_BRIGHT_5};
    box-shadow: rgba(130, 130, 130, 0.15) 0px 0px 20px;
`;
