import BottomMenu from '@/components/Commons/BottomMenu';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Header } from '@components/Commons';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { HomeMenu } from './styled';

const home = () => {
    return (
        <div>
            <Header
                isPrevBtn={false}
                rightElement={
                    <div css={HomeMenu}>
                        <h1>MZTI</h1>

                        <div className="right">
                            <Link href="/alarm" className="alarm">
                                <FaBell />
                            </Link>
                            <Link href="/mypage">
                                <FaUserCircle />
                            </Link>
                        </div>
                    </div>
                }
            />
            <HotKeyword />
            <FeedItem />

            <BottomMenu />
        </div>
    );
};

export default home;
