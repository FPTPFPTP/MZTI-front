import Link from 'next/link';
import SearchIcon from '@assets/icons/header/search.svg';
import AlarmIcon from '@assets/icons/header/alarm.svg';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import Logo from '@assets/icons/common/logo.svg';
import { HomeMenuStyle } from './styled';

interface IFeedHeaderProps {
    isCurrentScrollTop?: boolean;
    categoryId?: number;
}

const FeedHeader = ({ isCurrentScrollTop }: IFeedHeaderProps) => {
    return (
        <header css={HomeMenuStyle}>
            <div className="header">
                <div className="header-contents-inner">
                    <div className="header-contents__left">
                        <h1 className="logo">
                            <Logo />
                        </h1>

                        <div className="right">
                            {isCurrentScrollTop === false && (
                                <Link href="/search">
                                    <SearchIcon />
                                </Link>
                            )}

                            <Link href="/mypage" className="mypage">
                                <MyPageIcon />
                            </Link>
                            {/* TODO : 2차 오픈때 개발 예정 */}
                            <button>
                                <AlarmIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default FeedHeader;
