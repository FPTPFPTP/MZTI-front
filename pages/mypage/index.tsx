import { useEffect, useState } from 'react';
import Banner from '@/components/MyPageCom/Banner';
import Menu from '@/components/MyPageCom/Menu';
import Profile from '@/components/MyPageCom/Profile';
import Write from '@/components/MyPageCom/Write';
import { MypageWrap } from '@styles/pages/mypageStyled';
import EditSvg from '@assets/icons/mypage/edit.svg';
import Etc from '@assets/icons/mypage/etc.svg';
import Notice from '@assets/icons/mypage/notice.svg';
import Support from '@assets/icons/mypage/support.svg';
import Bookmark from '@assets/icons/mypage/bookmark.svg';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import NotUser from '@/components/MyPageCom/NotUser';
import { getMyPageActive } from '@/apis/post';
import useWindowSize from '@/hooks/useWindowSize';
import { getAccessToken } from '@utils/auth';
import { IMyPageActive } from '@/types/post';
import { BottomMenu, MultiCarousel } from '@/components/Commons';
import { getMeUserInfo } from '@/apis/user';

const menuList = [
    {
        title: '내가 저장한 글',
        subDesc: '',
        url: '/mypage/bookmark',
        icon: <Bookmark />,
    },
    {
        title: 'MBTI 유형별 특징 모아적기',
        subDesc: '',
        url: '/write/fact',
        icon: <Bookmark />,
    },
    {
        title: '공지사항',
        subDesc: '업데이트 소식, 게시판 추가 등',
        url: '/mypage/notice',
        icon: <Notice />,
    },
    {
        title: '서포트 센터',
        subDesc: '1:1 문의, 건의 사항 등',
        url: '/mypage/feedback',
        icon: <Support />,
    },
    {
        title: '서비스 정보 및 계정관리',
        subDesc: '이용약관 등',
        url: '/mypage/etc',
        icon: <Etc />,
    },
];

const mypage = () => {
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const [myActive, setMyactive] = useState<IMyPageActive>();

    const { width } = useWindowSize();

    useEffect(() => {
        if (getAccessToken()) {
            getMyPageActive().then((res) => setMyactive(res));
            getMeUserInfo().then((res) => setMyInfo(res));
        }
    }, []);

    useEffect(() => {
        console.log('myInfo', myInfo?.role);
    }, []);

    return (
        <>
            <div css={MypageWrap}>
                <header className="mypage_header">
                    <h1>마이페이지</h1>
                    <div className="buttons">
                        {myInfo?.role !== 'USER_ROLE' && (
                            <Link href="/admin" className="admin">
                                Admin
                            </Link>
                        )}
                        {myInfo && (
                            <Link href="/mypage/edit" className="edit">
                                <EditSvg />
                            </Link>
                        )}
                    </div>
                </header>
                {myInfo ? (
                    <div className="profileWrap">
                        <Profile user={myInfo} />
                        {myActive && <Write write={myActive.post} comment={myActive.comment} recommend={myActive.like} />}
                    </div>
                ) : (
                    <NotUser />
                )}

                <div className="bannerWrap">
                    <MultiCarousel>
                        <Banner
                            isMobile={width < 768}
                            link={'https://www.mzti.kr'}
                            imageSrc={'/images/mzti_promote.png'}
                            bigImageSrc={'/images/mzti_banner_relation1000x200.png'}
                            imageAlt={'mzti'}
                        />
                        <Banner
                            isMobile={width < 768}
                            link={'/board/fact'}
                            imageSrc={'/images/mzti_banner_relation360x100.png'}
                            bigImageSrc={'/images/mzti_banner_relation1000x200.png'}
                            imageAlt={'mzti'}
                        />
                    </MultiCarousel>
                </div>
            </div>
            <Menu menuList={menuList} />
            <BottomMenu />
        </>
    );
};
export default mypage;
