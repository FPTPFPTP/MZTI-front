import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { openToast } from '@/utils/toast';
import Fact from '@/components/Fact';
import { useForm } from 'react-hook-form';
import { postWrite } from '@apis/post';
import CheckSvg from '@assets/icons/circle_check.svg';
import { Header, Input } from '@components/Commons';
import { factWrap } from '@/styles/pages/writeStyled';

const FactWrite = () => {
    const { register, watch, reset, setValue } = useForm();
    const myInfo = useRecoilValue(myPageInfo);
    const { title } = watch();
    const router = useRouter();
    const [content, setContent] = useState('');

    useEffect(() => {
        // 비회원일때
        if (!myInfo) {
            router.push('/mypage');
            openToast({ message: '글쓰기는 로그인 후 진행해주세요' });
        }
    }, [myInfo]);

    const onBackPage = () => {
        router.push('/home');
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = async () => {
        try {
            if (!title.length) {
                openToast({ message: '게시글 타이틀을 작성해주세요' });
                return;
            }
            const data = await postWrite({
                title,
                categoryId: 23,
                content: content,
            });

            if (data && data.code === 'SUCCESS') {
                openToast({ message: '작성한 글 업로드에 성공했어요' });
                router.push(`/boardDetail/${data.data.id}`);
            }
        } catch (error) {
            console.log(error);
            return;
        }
    };

    return (
        <main>
            <Header
                onClickBackButton={onBackPage}
                title={'내가 느낀 MBTI 별 팩폭 글쓰기'}
                rightElement={
                    <button onClick={handleRegisterButton}>
                        <CheckSvg />
                    </button>
                }
            />
            {/* 제목 */}
            <form css={factWrap}>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'제목을 입력하세요'}
                    isResetBtn={!!title}
                    handleReset={() => reset()}
                    maxLength={30}
                    {...register('title')}
                />
                <button type="submit" />

                <Fact />
            </form>
        </main>
    );
};

export default FactWrite;
