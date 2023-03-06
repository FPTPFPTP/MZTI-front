import Banner from '@/components/MyPage/Banner';
import Menu from '@/components/MyPage/Menu';
import Profile from '@/components/MyPage/Profile';
import Write from '@/components/MyPage/Write';
import { Header } from '@components/Commons';
import { MypageWrap } from './styled';
import EditSvg from '@assets/icons/edit.svg';
import Link from 'next/link';
import { getMyPage } from '@/utils/apis/user';
import { useEffect, useState } from 'react';
import { IUserModel } from '@/types/user';

const mypage = () => {
    const [myInfo, setMyInfo] = useState<IUserModel>({
        nickname: '',
        mbti: '',
        intro: '',
    });

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
