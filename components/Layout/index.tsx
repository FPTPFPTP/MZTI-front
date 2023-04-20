import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TopButton from '@assets/icons/common/scrollToTop.svg';

const Layout: React.FC<any> = (props) => {
    const { children } = props;
    const [showButton, setShowButton] = useState<boolean>(false);

    // 👉 클릭 시 맨 위로 올라가도록
    const handleScroll = () => {
        if (!window.scrollY) return;

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleShowButton);
        return () => {
            window.removeEventListener('scroll', handleShowButton);
        };
    }, []);
    return (
        <div css={StyledLayout}>
            {children}

            {showButton && (
                <div className="topBtn_wrap">
                    <button className="topBtn" onClick={handleScroll}>
                        <TopButton />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Layout;

const StyledLayout = css`
    background-color: ${color.WHITE};
    position: relative;
    /* min-width: 375px;
    max-width: 600px; */
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    .topBtn_wrap {
        position: sticky;
        bottom: 106px;
        float: right;
        margin-right: 30px;
    }
`;
