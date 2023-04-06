import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLogin, myPageInfo } from '@/recoil/atom/user';
import Menu from '@/components/MyPageCom/Menu';
import { Header } from '@components/Commons';
import { removeTokenAll } from '@utils/auth';
import { MypageWrap } from '@styles/pages/mypageStyled';
import { MypageEtcMenu } from '@styles/pages/mypageEtcStyled';

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
    const iamUser = useRecoilValue(isLogin);
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const router = useRouter();

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
                    <button
                        className="logout"
                        onClick={() => {
                            removeTokenAll();
                            setMyInfo(undefined);
                            alert('로그아웃 되셨습니다.');
                            router.replace('/home');
                        }}
                    >
                        로그아웃
                    </button>

                    <Menu menuList={accountMng} />
                </section>
            </div>
        </>
    );
};
export default etc;
