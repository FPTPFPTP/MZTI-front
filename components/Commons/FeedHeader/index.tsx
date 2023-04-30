import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import Logo from '@assets/icons/common/logo.svg';
import Link from 'next/link';
import colors from '@/styles/color';

const FeedHeader = () => {
    const router = useRouter();

    return (
        <header css={HomeMenu}>
            <div className="header">
                <div className="header-contents-inner">
                    <div className="header-contents__left">
                        <h1 className="logo">
                            <Logo />
                        </h1>

                        <div className="right">
                            {/* TODO : 2차 오픈때 개발 예정 */}
                            {/* <Link href="/alarm" className="alarm">
                              <AlarmIcon />
                          </Link> */}
                            <Link href="/mypage">
                                <MyPageIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default FeedHeader;

const HomeMenu = () => css`
    height: 60px;
    flex: 0 0 60px;

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: 60px;
        border-top: 0;
        border-bottom: 0;
        line-height: normal;
        box-sizing: border-box;
        z-index: 70;

        .header-contents-inner {
            display: flex;
            width: 100%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            .header-contents__left {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        .alarm {
            margin-right: 20px;
        }
        a {
            font-size: 1.6rem;
            color: ${colors.BLACK};
        }
    }
`;
