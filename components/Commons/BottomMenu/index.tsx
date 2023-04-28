import { BottomButtonStyle } from './styled';
import HomeIcon from '@assets/icons/footerMenu/home.svg';
import MoreIcon from '@assets/icons/footerMenu/more.svg';
import WriteIcon from '@assets/icons/footerMenu/circle_plus.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const BottomMenuList = [
    { id: 1, title: '홈', link: '/home', icon: <HomeIcon /> },
    { id: 2, title: '글쓰기', link: '/write', icon: <WriteIcon /> },
    { id: 3, title: '게시판', link: '/board-list', icon: <MoreIcon /> },
];

const BottomMenu = () => {
    const router = useRouter();
    return (
        <nav css={BottomButtonStyle}>
            <ul>
                {BottomMenuList.map((item) => {
                    return (
                        <li className={classNames(item.link === router.asPath && 'active')} key={item.id}>
                            <Link href={item.link}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomMenu;
