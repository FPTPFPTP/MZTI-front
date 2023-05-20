import { useState } from 'react';
import { BottomButtonStyle } from './styled';
import HomeIcon from '@assets/icons/footerMenu/home.svg';
import MoreIcon from '@assets/icons/footerMenu/more.svg';
import WriteIcon from '@assets/icons/footerMenu/circle_plus.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import WriteDrawer from '../WriteDrawer';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Modal } from '@components/Commons';
import { ModalStyle } from '@/components/Commons/Modal/styled';

const BottomMenuList = [
    { id: 1, title: '홈', link: '/home', icon: <HomeIcon /> },
    { id: 2, title: '글쓰기', link: '/write', icon: <WriteIcon width={35} height={35} /> },
    { id: 3, title: '게시판', link: '/board-list', icon: <MoreIcon /> },
];

const BottomMenu = () => {
    const [isWriteDrawer, setIsWriteDrawer] = useState<boolean>(false);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);

    const myInfo = useRecoilValue(myPageInfo);

    const router = useRouter();

    const handleLogin = () => {
        router.replace('/login');
    };

    return (
        <nav css={BottomButtonStyle}>
            <ul>
                {BottomMenuList.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.id === 2 ? (
                                <li
                                    className={classNames(item.link === router.asPath && 'active')}
                                    onClick={() => (myInfo ? setIsWriteDrawer((isWriteDrawer) => !isWriteDrawer) : setIsLogoutModal(true))}
                                >
                                    {item.icon}
                                </li>
                            ) : (
                                <li className={classNames(item.link === router.asPath && 'active')}>
                                    <Link href={item.link}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )}
                        </div>
                    );
                })}
            </ul>
            <WriteDrawer isVisible={isWriteDrawer} onClose={() => setIsWriteDrawer(false)} />
            <Modal title={'로그인이 필요한 기능입니다'} isModalVisible={isLogoutModal} closable={false} footer={null} centered={true}>
                <div css={ModalStyle}>
                    <p>회원가입이나 로그인을 해주세요.</p>
                    <div className="buttons">
                        <button onClick={() => setIsLogoutModal(false)} className="button cancel">
                            취소
                        </button>
                        <button onClick={handleLogin} className="button">
                            확인
                        </button>
                    </div>
                </div>
            </Modal>
        </nav>
    );
};

export default BottomMenu;
