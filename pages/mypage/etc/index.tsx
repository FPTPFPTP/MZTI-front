import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import Menu from '@/components/MyPageCom/Menu';
import { Header, Modal } from '@components/Commons';
import { removeTokenAll } from '@utils/auth';
import { MypageWrap } from '@styles/pages/mypageStyled';
import { MypageEtcMenu } from '@styles/pages/mypageEtcStyled';
import colors from '@styles/color';

const menuList = [
    {
        title: 'MZTI 서비스 약관',
        url: '?',
    },
    {
        title: '개인정보 처리방침',
        url: '?',
    },
    // { {TODO} : 2차때 할 예정임
    //     title: '오픈소스 라이선스',
    //     url: '?',
    // },
    {
        title: '광고문의',
        url: '?',
    },
];

const accountMng = [
    {
        title: '서비스 탈퇴',
        url: '/mypage/etc/secession',
    },
];

const etc = () => {
    const [isLogoutModal, setIsLogoutModal] = useState(false);
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const router = useRouter();

    const onLogout = () => {
        removeTokenAll();
        setMyInfo(undefined);
        setIsLogoutModal(false);
        toast('로그아웃 했어요', {
            duration: 1000,
            position: 'top-center',
            style: {
                width: '100%',
                textAlign: 'left',
                borderRadius: '4px',
                background: colors.BLACK,
                color: colors.WHITE,
            },
        });
        router.replace('/home');
    };

    return (
        <>
            <Header title="기타 서비스 정보 및 계정관리" />
            <div css={MypageWrap}>
                <section>
                    <h3>서비스 정보</h3>
                    <Menu menuList={menuList} />
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
