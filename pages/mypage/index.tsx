import Banner from '@/components/MyPage/Banner';
import Menu from '@/components/MyPage/Menu';
import Profile from '@/components/MyPage/Profile';
import Write from '@/components/MyPage/Write';
import { Header } from '@components/Commons';
import { MypageWrap } from './styled';

const mypage = () => {
    return (
        <>
            <Header title="마이페이지" />
            <div css={MypageWrap}>
                <Profile />
                <Write write={12} comment={73} recommend={514} />
                <Banner />
                <Menu />
            </div>
        </>
    );
};
export default mypage;
