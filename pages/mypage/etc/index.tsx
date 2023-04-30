import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Button, Header, Modal } from '@components/Commons';
import { removeTokenAll } from '@utils/auth';
import { openToast } from '@/utils/toast';
import MyPageArr from '@assets/icons/common/myPageArr.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DepthMenu from '@/components/MyPageCom/DepthMenu';
import { DepthMenuStyle, LogoutModal } from '@/components/MyPageCom/styled';
import DrawerMenu from '@/components/Commons/Drawer';

const etc = () => {
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const router = useRouter();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    const menuLists = [
        {
            id: 1,
            title: 'MZTI 서비스 약관',
            onClick: () => {
                setIsModal(true);
            },
        },
        {
            id: 2,
            title: '개인정보 처리방침',
            onClick: () => {
                setIsModal(true);
            },
        },
    ];

    const accountMng = [
        {
            id: 3,
            title: '로그아웃',
            onClick: () => {
                setIsVisible(true);
            },
        },
        {
            id: 4,
            title: '서비스 탈퇴',
            onClick: () => {
                router.push('/mypage/etc/secession');
            },
        },
    ];

    const handleAdvertisement = () => {
        openToast({ message: '✉️ fptp.mz@gmail.com \n 메일주소가 클립보드에 복사되었어요', duration: 3000 });
    };

    const handleLogout = () => {
        removeTokenAll();
        setMyInfo(undefined);
        router.replace('/mypage');
    };
    return (
        <>
            <Header />
            <div css={DepthMenuStyle}>
                <DepthMenu menuList={menuLists} typeTitle="서비스 정보" />

                <CopyToClipboard text="fptp.mz@gmail.com">
                    <button className="advertisement" onClick={handleAdvertisement}>
                        <span className="stitle">광고문의</span>
                        <span>
                            <MyPageArr />
                        </span>
                    </button>
                </CopyToClipboard>

                <div className="depthWrap">
                    <DepthMenu menuList={accountMng} typeTitle="계정 관리" />
                </div>
            </div>

            {isVisible && (
                <DrawerMenu
                    onClick={handleLogout}
                    onClose={() => setIsVisible(false)}
                    isVisible={isVisible}
                    title="로그아웃"
                    close={true}
                    Children={
                        <div css={LogoutModal}>
                            <p>아래 계정으로 다시 로그인 할 수 있어요.</p>
                            <Button onClick={handleLogout}>로그아웃</Button>
                        </div>
                    }
                />
            )}

            {isModal && (
                <Modal title="준비중인 기능입니다" open={isModal} onCancel={() => setIsModal(false)} footer={null} isModalVisible={false} centered={true}>
                    <>
                        <p>새로운 기능을 준비하고 있어요! 다음 업데이트를 기다려주세요</p>
                        <button onClick={() => setIsModal(false)}>확인</button>
                    </>
                </Modal>
            )}
        </>
    );
};
export default etc;
