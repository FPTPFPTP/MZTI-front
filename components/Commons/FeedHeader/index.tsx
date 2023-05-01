import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchIcon from '@assets/icons/header/search.svg';
import AlarmIcon from '@assets/icons/header/alarm.svg';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import Logo from '@assets/icons/common/logo.svg';
import { Input } from '@components/Commons';
import { HomeMenuStyle, SearchWrapStyle } from './styled';

interface IFeedHeaderProps {
    isCurrentScrollTop?: boolean;
    categoryId?: number;
}

const FeedHeader = ({ isCurrentScrollTop, categoryId }: IFeedHeaderProps) => {
    const router = useRouter();

    return (
        <header css={HomeMenuStyle({ isCurrentScrollTop })}>
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
            {(isCurrentScrollTop || isCurrentScrollTop === undefined) && (
                <div css={SearchWrapStyle}>
                    <Input
                        inputStyle={'search'}
                        placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                        onClick={() => router.push(`/search${categoryId ? `/${categoryId}` : ''}`)}
                    />
                </div>
            )}
        </header>
    );
};

export default FeedHeader;
