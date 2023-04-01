import { BottomButtonStyle } from './styled';
import HomeIcon from '@assets/icons/footerMenu/home.svg';
import MoreIcon from '@assets/icons/footerMenu/more.svg';
import WriteIcon from '@assets/icons/footerMenu/circle_plus.svg';
import Link from 'next/link';

const BottomMenu = () => {
    return (
        <nav css={BottomButtonStyle}>
            <ul>
                <li>
                    <Link href="/home">
                        <HomeIcon />
                        <span>홈</span>
                    </Link>
                </li>
                <li>
                    <Link href="/write">
                        <WriteIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/board-list">
                        <MoreIcon />
                        <span>게시판</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BottomMenu;
