import { useState } from 'react';
import { BottomButtonStyle } from './styled';
import HomeIcon from '@assets/icons/footerMenu/home.svg';
import MoreIcon from '@assets/icons/footerMenu/more.svg';
import WriteIcon from '@assets/icons/footerMenu/circle_plus.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import WriteDrawer from '../WriteDrawer';

const BottomMenuList = [
    { id: 1, title: '홈', link: '/home', icon: <HomeIcon /> },
    { id: 2, title: '글쓰기', link: '/write', icon: <WriteIcon width={35} height={35} /> },
    { id: 3, title: '게시판', link: '/board-list', icon: <MoreIcon /> },
];

const BottomMenu = () => {
    const [isWriteDrawer, setIsWriteDrawer] = useState<boolean>(false);

    const router = useRouter();

    return (
        <nav css={BottomButtonStyle}>
            <ul>
                {BottomMenuList.map((item) => {
                    return (
                        <>
                            {item.id === 2 ? (
                                <li
                                    className={classNames(item.link === router.asPath && 'active')}
                                    key={item.id}
                                    onClick={() => setIsWriteDrawer((isWriteDrawer) => !isWriteDrawer)}
                                >
                                    {item.icon}
                                </li>
                            ) : (
                                <li className={classNames(item.link === router.asPath && 'active')} key={item.id}>
                                    <Link href={item.link}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )}
                        </>
                    );
                })}
            </ul>
            <WriteDrawer isVisible={isWriteDrawer} onClose={() => setIsWriteDrawer(false)} />
        </nav>
    );
};

export default BottomMenu;
