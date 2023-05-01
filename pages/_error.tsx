import { Empty } from '@/components/MyPageCom';
import { Header } from '@components/Commons';
import { useRouter } from 'next/router';
import PageError from '@assets/icons/common/page_error.svg';
import { ErrorWrap } from '@/styles/pages/errorStyled';

const Error = () => {
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
                    title="문제가 발생했어요"
                    subTitle={`페이지가 존재하지 않거나,\n주소가 잘못 입력된 것 같아요.`}
                    buttonTitle="메인화면으로 가기"
                    onClick={handleMain}
                />
            </div>
        </main>
    );
};

export default Error;
