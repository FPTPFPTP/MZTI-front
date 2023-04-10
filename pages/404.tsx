import { Empty } from '@/components/MyPageCom';
import { Header } from '@components/Commons';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    const handleMain = () => {
        router.push('/home');
    };
    return (
        <main>
            <Header />

            <Empty
                title="문제가 발생했습니다"
                subTitle={`서버에 문제가 있는 것 같아요.\n잠시 후 다시 시도해주세요`}
                buttonTitle="메인화면으로 가기"
                onClick={handleMain}
            />
        </main>
    );
};

export default NotFound;
