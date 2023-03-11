import Banner from '@/components/MyPageCom/Banner';
import Menu from '@/components/MyPageCom/Menu';
import Profile from '@/components/MyPageCom/Profile';
import Write from '@/components/MyPageCom/Write';
import { Header } from '@components/Commons';
import { MypageWrap } from './styled';
import EditSvg from '@assets/icons/edit.svg';
import Link from 'next/link';
import { getMyPage } from '@/utils/apis/user';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import NotUser from '@assets/icons/notUser.svg';
import NotUserMbti from '@assets/icons/notUser_mbti.svg';

const mypage = () => {
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        const MyInfoData = getMyPage().then((res) => {
            setMyInfo(res);
        });
        MyInfoData;
    }, []);

    return (
        <>
            <Header
                title="마이페이지"
                rightElement={
                    <Link href="/mypage/edit">
                        <EditSvg />
                    </Link>
                }
            />
            <div css={MypageWrap}>
                {isLogin ? (
                    <>
                        <Profile mbti={myInfo.mbti} nickname={myInfo.nickname} intro={myInfo.intro} />
                        <Write write={12} comment={73} recommend={514} />
                    </>
                ) : (
                    <div className="notUser">
                        <div className="notUser__flex">
                            <div className="notUser__left">
                                <div className="profile">
                                    <NotUser />
                                </div>
                                <p>Lv.0</p>
                            </div>
                            <div className="notUser__right">
                                <NotUserMbti />
                                <h3>로그인해주세요</h3>
                                <p>로그인을 통해 MZTI의 더 많은 기능을 경험해보세요</p>
                            </div>
                        </div>
                        <Link href="/login" className="loginButton">
                            회원가입 / 로그인
                        </Link>
                    </div>
                )}

                <Banner />
                <Menu />
            </div>
        </>
    );
};
export default mypage;
