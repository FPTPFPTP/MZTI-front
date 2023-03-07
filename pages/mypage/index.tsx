import Banner from '@/components/MyPageCom/Banner';
import Menu from '@/components/MyPageCom/Menu';
import Profile from '@/components/MyPageCom/Profile';
import Write from '@/components/MyPageCom/Write';
import { Header } from '@components/Commons';
import { MypageWrap } from './styled';
import EditSvg from '@assets/icons/edit.svg';
import Link from 'next/link';
import { getMyPage } from '@/utils/apis/user';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';

const mypage = () => {
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);

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
                <Profile mbti={myInfo.mbti} nickname={myInfo.nickname} intro={myInfo.intro} />
                <Write write={12} comment={73} recommend={514} />
                <Banner />
                <Menu />
            </div>
        </>
    );
};
export default mypage;
