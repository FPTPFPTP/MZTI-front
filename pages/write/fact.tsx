import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { openToast } from '@/utils/toast';
import { useForm } from 'react-hook-form';
import { postWrite } from '@apis/post';
import MbtiJson from '@/constants/mbti.json';
import CheckSvg from '@assets/icons/circle_check.svg';
import { Header, Input } from '@components/Commons';
import { FactWrapStyle, FactStyle } from '@/components/Write/styled';
import { getMbtiColor } from '@/utils/postItem';

const FactWrite = () => {
    const { register, watch, reset, handleSubmit } = useForm();
    const myInfo = useRecoilValue(myPageInfo);
    const { title, ISFJ, ISFP, INFJ, INFP, ISTJ, ISTP, INTJ, INTP, ESFJ, ESFP, ENFJ, ENFP, ESTJ, ESTP, ENTJ, ENTP } = watch();
    const router = useRouter();
    const mbtis = MbtiJson;

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
            const mbtiObj = {
                ISFJ,
                ISFP,
                INFJ,
                INFP,
                ISTJ,
                ISTP,
                INTJ,
                INTP,
                ESFJ,
                ESFP,
                ENFJ,
                ENFP,
                ESTJ,
                ESTP,
                ENTJ,
                ENTP,
            };

            if (!title.length) {
                openToast({ message: '게시글 타이틀을 작성해주세요' });
                return;
            } else if (Object.keys(mbtiObj).filter((mbti: string) => mbtiObj[mbti] !== '').length < 5) {
                openToast({ message: '최소 5개 이상 작성해주세요' });
                return;
            }

            const data = await postWrite({
                title,
                categoryId: 23,
                content: JSON.stringify({ ISFJ, ISFP, INFJ, INFP, ISTJ, ISTP, INTJ, INTP, ESFJ, ESFP, ENFJ, ENFP, ESTJ, ESTP, ENTJ, ENTP }),
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

    // 제출버튼
    const onSubmit = () => {
        handleRegisterButton();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header
                onClickBackButton={onBackPage}
                title={'내가 느낀 MBTI별 팩폭 글쓰기'}
                rightElement={
                    <button type="submit">
                        <CheckSvg />
                    </button>
                }
            />
            {/* 제목 */}
            <div css={FactWrapStyle}>
                <p className="notice">내가 느낀 16가지 MBTI를 문답형식으로 작성해보세요~</p>

                <div className="title">
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'제목을 입력하세요'}
                        isResetBtn={!!title}
                        handleReset={() => reset()}
                        maxLength={30}
                        {...register('title')}
                    />
                    <button type="submit" />
                </div>

                {mbtis.map((mbti) => {
                    return (
                        <div css={FactStyle} key={mbti.title}>
                            <h3 style={{ background: getMbtiColor(mbti.title) }}>{mbti.title}</h3>
                            <Input
                                inputStyle={'borderLess'}
                                placeholder={`내가 본 ${mbti.title}는 이렇더라~`}
                                handleReset={() => reset()}
                                {...register(mbti.title)}
                            />
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

export default FactWrite;
