import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/MyPageCom';
import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';
import { useGetBookMarkMe } from '@/apis/post';

const BookMarkList = () => {
    const observerRef = useRef(null);

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();
    const { contents: bookMakrList, hasNextPage, fetchNextPage } = useGetBookMarkMe(search);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [target] = entries;
            if (target.isIntersecting) {
                fetchNextPage();
            }
        },
        [fetchNextPage, hasNextPage],
    );

    useEffect(() => {
        const element = observerRef.current;
        const option = { threshold: 0 };

        const observer = new IntersectionObserver(handleObserver, option);
        if (element) {
            observer.observe(element);
            return () => observer.unobserve(element);
        }
    }, [fetchNextPage, hasNextPage, handleObserver]);

    return (
        <>
            <Header title={'내가 북마크한 글'} />
            <div css={Layout}>
                <form>
                    <Input
                        inputStyle={'search'}
                        placeholder={'검색글 제목, 글 본문 내용 등 검색'}
                        isResetBtn={!!search}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('search')}
                    />
                </form>
                <ListBox>
                    {bookMakrList.length ? (
                        bookMakrList.map((item) => <ListItem key={item.id} item={item} />)
                    ) : (
                        <Empty title="북마크한 글이 없습니다" subTitle="새로운 게시글을 살펴보러 갈까요?" buttonTitle="메인화면으로 가기" href="/home" />
                    )}
                    <div className="loader" ref={observerRef}>
                        {hasNextPage ? <Loading /> : null}
                    </div>
                </ListBox>
            </div>
        </>
    );
};

export default BookMarkList;
