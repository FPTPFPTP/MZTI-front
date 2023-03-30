import Drawer from 'react-bottom-drawer';
import Link from 'next/link';
import { PostMore } from '@/components/Home/FeedItem/styled';

interface MoreDrawerProps {
    isVisible: boolean;
    onClick: () => void;
    desc: string;
}

const MoreDrawer = ({ isVisible, onClick, desc }: MoreDrawerProps) => {
    return (
        <nav css={PostMore}>
            <Drawer duration={250} hideScrollbars={true} onClose={onClick} isVisible={isVisible} className="postDrawer">
                <h3>더보기</h3>

                <ul>
                    <li>
                        <Link href="/mypage/feedback">{desc} 신고</Link>
                    </li>
                    <li className="none">글쓴이 차단 (추후 오픈 예정)</li>
                </ul>
            </Drawer>
        </nav>
    );
};

export default MoreDrawer;
