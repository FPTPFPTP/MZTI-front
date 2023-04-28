import { Empty } from '@/components/MyPageCom';
import { Header } from '@components/Commons';
import { useRouter } from 'next/router';
import PageError from '@assets/icons/common/page_error.svg';
import { ErrorWrap } from '@/styles/pages/errorStyled';

const NotFound = () => {
    const router = useRouter();
    const handleMain = () => {
        router.push('/home');
    };
    return (
        <main>
            <Header />

            <div css={ErrorWrap}>
                <Empty
                    icon={<PageError />}
                    title="서버에 문제가 생겼어요"
                    subTitle={`서버에 문제가 발생한 것 같아요.\n잠시 후 다시 시도해주세요`}
                    buttonTitle="메인화면으로 가기"
                    onClick={handleMain}
                />
            </div>
        </main>
    );
};

export default NotFound;
