import Banner from '@/components/MyPageCom/Banner';
import Menu from '@/components/MyPageCom/Menu';
import Profile from '@/components/MyPageCom/Profile';
import Write from '@/components/MyPageCom/Write';
import { Header } from '@components/Commons';
import { MypageWrap } from '@styles/pages/mypageStyled';
import EditSvg from '@assets/icons/edit.svg';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import NotUser from '@/components/MyPageCom/NotUser';

const menuList = [
    {
        title: '내가 북마크 한 글',
        subDesc: '',
        url: '/mypage/bookmark',
    },
    {
        title: '서포트 센터',
        subDesc: '1:1 문의, 건의 사항',
        url: '/mypage/feedback',
    },
    {
        title: '공지사항',
        subDesc: '업데이트 소식, 게시판 추가 등',
        url: '/mypage/notice',
    },
    {
        title: '계정 관리',
        subDesc: '로그아웃 등',
        url: '/mypage/account_mgt',
    },
];

const mypage = () => {
    const myInfo = useRecoilValue(myPageInfo);

    return (
        <>
            <Header
                title="마이페이지"
                rightElement={
                    myInfo && (
                        <Link href="/mypage/edit">
                            <EditSvg />
                        </Link>
                    )
                }
            />
            <div css={MypageWrap}>
                {myInfo ? (
                    <>
                        <Profile mbti={myInfo.mbti} nickname={myInfo.nickname} intro={myInfo.intro} profileImage={myInfo.profileImage} />
                        <Write write={12} comment={73} recommend={514} />
                    </>
                ) : (
                    <NotUser />
                )}

                <Banner />
                <Menu menuList={menuList} />
            </div>
        </>
    );
};
export default mypage;
