import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import Menu from '@/components/MyPageCom/Menu';
import { Header, Modal } from '@components/Commons';
import { removeTokenAll } from '@utils/auth';
import { openToast } from '@/utils/toast';
import { MypageWrap } from '@styles/pages/mypageStyled';
import { MypageEtcMenu } from '@styles/pages/mypageEtcStyled';
import MyPageArr from '@assets/icons/common/myPageArr.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const menuList = [
    {
        title: 'MZTI 서비스 약관',
        url: '?',
        icon: '',
    },
    {
        title: '개인정보 처리방침',
        url: '?',
        icon: '',
    },
];

const accountMng = [
    {
        title: '서비스 탈퇴',
        url: '/mypage/etc/secession',
        icon: '',
    },
];

const etc = () => {
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const router = useRouter();

    const onLogout = () => {
        removeTokenAll();
        setMyInfo(undefined);
        setIsLogoutModal(false);
        openToast({ message: '로그아웃 했어요' });
        router.replace('/home');
    };

    const handleAdvertisement = () => {
        openToast({ message: '✉️ fptp.mz@gmail.com \n 메일주소가 클립보드에 복사되었어요', duration: 3000 });
    };

    return (
        <>
            <Header title="서비스 정보 및 계정관리" />
            <div css={MypageWrap}>
                <section>
                    <h3>서비스 정보</h3>
                    <Menu menuList={menuList} />
                    <CopyToClipboard text="fptp.mz@gmail.com">
                        <button className="advertisement" onClick={handleAdvertisement}>
                            <span>광고문의</span>
                            <span>
                                <MyPageArr />
                            </span>
                        </button>
                    </CopyToClipboard>
                </section>

                <section css={MypageEtcMenu}>
                    <h3>계정 관리</h3>
                    <button className="logout" onClick={() => setIsLogoutModal(true)}>
                        로그아웃
                    </button>

                    <Menu menuList={accountMng} />
                </section>
            </div>
            <Modal
                title={'로그아웃'}
                isModalVisible={isLogoutModal}
                closable={false}
                footer={
                    <>
                        <button onClick={() => setIsLogoutModal(false)}>취소</button>
                        <button onClick={onLogout}>로그아웃</button>
                    </>
                }
            >
                <p>아래 계정으로 다시 로그인할 수 있습니다.</p>
            </Modal>
        </>
    );
};
export default etc;
