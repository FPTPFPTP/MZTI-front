import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Drawer from 'react-bottom-drawer';
import { useForm } from 'react-hook-form';
import Filter from 'badwords-ko';
import { postWrite } from '@apis/post';
import { openToast } from '@/utils/toast';
import { Input, TextArea } from '@components/Commons';
import CheckIcon from '@assets/icons/write/check.svg';
import CloseIcon from '@assets/icons/write/close.svg';
import WarningIcon from '@assets/icons/write/warningIcon.svg';
import { WriteDrawerWrapStyle } from './styled';

interface IWriteDrawerProps {
    isVisible: boolean;
    onClose: () => void;
}

const WriteDrawer = ({ isVisible, onClose }: IWriteDrawerProps) => {
    const [step, setStep] = useState<number>(0);
    const { register, watch, reset } = useForm();
    const { title, content } = watch();
    const isPossible = useMemo(() => (title && title.length && content && content.length ? true : false), [title, content]);

    const router = useRouter();

    // 게시글 등록
    const onPostPush = async () => {
        if (isPossible) {
            try {
                const filter = new Filter();
                if (filter.clean(title).includes('*')) {
                    openToast({ message: '비속어를 사용할 수 없습니다' });
                }
                if (filter.clean(content).includes('*')) {
                    openToast({ message: '비속어를 사용할 수 없습니다' });
                }
                const data = await postWrite({
                    title,
                    categoryId: 1,
                    content,
                    tagList: [],
                    pollList: [],
                });

                if (data && data.code === 'SUCCESS') {
                    openToast({ message: '작성한 글 업로드에 성공했어요' });
                    router.push(`/boardDetail/${data.data.id}`);
                    onClose();
                }
            } catch (error) {
                console.log(error);
                return;
            }
        } else {
            openToast({ message: '게시글 제목과 본문을 입력해주세요' });
        }
    };

    useEffect(() => {
        if (!isVisible) {
            reset();
            setStep(0);
        }
    }, [isVisible]);

    return (
        <nav css={WriteDrawerWrapStyle}>
            <Drawer className="postDrawer" duration={250} hideScrollbars={true} onClose={onClose} isVisible={isVisible}>
                <div className="title">
                    <h3>{step === 0 ? '글쓰기' : '간편 글쓰기'}</h3>
                    <button onClick={() => (step === 0 ? onClose() : onPostPush())} disabled={step === 1 && !isPossible}>
                        {step === 0 ? <CloseIcon /> : <CheckIcon fill={isPossible ? '#000000' : '#949699'} />}
                    </button>
                </div>
                <div className="body">
                    {step === 0 && (
                        <>
                            <div onClick={() => setStep(1)}>
                                <h3>간편 글쓰기</h3>
                                <p>10초만에 간편하게 글을 쓸 수 있어요</p>
                            </div>
                            <div>
                                <Link href={'/write'}>
                                    <h3>일반 글쓰기</h3>
                                    <p>글을 꾸미고 이미지, 움짤 등을 넣을 수 있어요</p>
                                </Link>
                            </div>
                        </>
                    )}
                    {step === 1 && (
                        <div className={'simple_write'}>
                            <form>
                                <Input
                                    inputStyle={'base'}
                                    placeholder={'게시글 제목 입력'}
                                    {...register('title', {
                                        required: true,
                                    })}
                                    style={{ fontSize: 17, fontWeight: 700 }}
                                />
                                <TextArea
                                    placeholder={'게시글 본문 입력(300자 이하)'}
                                    {...register('content', {
                                        required: true,
                                    })}
                                    style={{ fontSize: 14, fontWeight: 500, marginTop: 22 }}
                                />
                                <button type="submit" />
                            </form>
                            {!isPossible && (
                                <div className={'warning'}>
                                    <WarningIcon />
                                    <span>간편글쓰기로 작성한 글은 자유게시판에만 등록할 수 있어요</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Drawer>
        </nav>
    );
};

export default WriteDrawer;
