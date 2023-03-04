import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/Mypage';
import { useGetComments } from '@apis/mypage';
import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';

const WriteCommentList = () => {
    const observerRef = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: commentList, hasNextPage, fetchNextPage } = useGetComments(searchValue);

    const onSubmit = (data: { search: string }) => {
        setSearchValue(data.search);
    };

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
        <div css={Layout}>
            <Header title={'내가 작성한 댓글'} rightElement={<EditSvg />} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'search'}
                    placeholder={'댓글 내용 검색'}
                    isResetBtn={!!search}
                    handleReset={() => reset()}
                    maxLength={8}
                    {...register('search')}
                />
            </form>
            <ListBox>
                {commentList.length ? (
                    commentList.map((item) => <ListItem key={item.id} number={item.id + 1} title={item.title} date={item.date} />)
                ) : (
                    <Empty title="작성한 댓글이 없습니다" subTitle="첫 댓글을 남겨보러 갈까요?" buttonTitle="댓글 작성하러 가기" href="/" />
                )}
                <div className="loader" ref={observerRef}>
                    {hasNextPage ? <Loading /> : null}
                </div>
            </ListBox>
        </div>
    );
};

export default WriteCommentList;
