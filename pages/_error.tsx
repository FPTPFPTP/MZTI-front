import { Empty } from '@/components/MyPageCom';
import { Header } from '@components/Commons';
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter();
    const handleMain = () => {
        router.push('/home');
    };
    return (
        <main>
            <Header />

            <Empty
                title="문제가 발생했습니다"
                subTitle={`페이지가 존재하지 않거나,\n주소가 잘못 입력된 것 같아요.\n 잠시 후 다시 시도해주세요`}
                buttonTitle="메인화면으로 가기"
                onClick={handleMain}
            />
        </main>
    );
};

export default Error;
