import BottomMenu from '@/components/Commons/BottomMenu';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Header } from '@components/Commons';
import AlarmIcon from '@assets/icons/header/alarm.svg';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import Link from 'next/link';
import { HomeMenu } from './styled';

const home = () => {
    return (
        <main>
            {/* 헤더 */}
            <Header
                isPrevBtn={false}
                rightElement={
                    <div css={HomeMenu}>
                        <h1>MZTI</h1>

                        <div className="right">
                            <Link href="/alarm" className="alarm">
                                <AlarmIcon />
                            </Link>
                            <Link href="/mypage">
                                <MyPageIcon />
                            </Link>
                        </div>
                    </div>
                }
            />

            {/* 핫토픽 키워드 */}
            <HotKeyword />

            {/* 피드 게시물 */}
            <FeedItem />

            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default home;
