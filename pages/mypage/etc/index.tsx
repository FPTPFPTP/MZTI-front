import Menu from '@/components/MyPageCom/Menu';
import { Header } from '@components/Commons';
import { MypageWrap } from '@styles/pages/mypageStyled';
import { useRecoilValue } from 'recoil';
import { isLogin } from '@/recoil/atom/user';
import { MypageEtcMenu } from './styled';

const menuList = [
    {
        title: 'MZTI 서비스 약관',
        url: '?',
    },
    {
        title: '개인정보 처리방침',
        url: '?',
    },
    {
        title: '오픈소스 라이선스',
        url: '?',
    },
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
                    <button className="logout">로그아웃</button>
                    <Menu menuList={accountMng} />
                </section>
            </div>
        </>
    );
};
export default etc;
