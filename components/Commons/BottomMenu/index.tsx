import { BottomButtonStyle } from './styled';
import HomeIcon from '@assets/icons/footerMenu/home.svg';
import MoreIcon from '@assets/icons/footerMenu/more.svg';
import WriteIcon from '@assets/icons/footerMenu/circle_plus.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { menuActive } from '@/recoil/atom/common';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BottomMenuList = [
    { id: 1, title: '홈', link: '/home', icon: <HomeIcon /> },
    { id: 2, title: '글쓰기', link: '/write', icon: <WriteIcon /> },
    { id: 3, title: '게시판', link: '/board-list', icon: <MoreIcon /> },
];

const BottomMenu = () => {
    const [countIndex, setCountIndex] = useRecoilState<number>(menuActive);
    const router = useRouter();
    const menuUrl = 'home' || 'write' || 'board-list';

    const handleOnClick = (index: number) => {
        setCountIndex(index);
    };

    // 하단 메뉴 url 외에 다른 페이지일 경우 active 처리 No
    useEffect(() => {
        if (!router.pathname.includes(menuUrl)) {
            setCountIndex(4);
        }
    }, [router]);

    return (
        <nav css={BottomButtonStyle}>
            <ul>
                {BottomMenuList.map((item, index) => {
                    return (
                        <li className={classNames(countIndex === index && 'active')} onClick={() => handleOnClick(index)} key={item.id}>
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
