import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/MyPageCom';
// import { useObserver } from '@/hooks/useObserver';
// import { useGetComments } from '@apis/mypage';
import { useGetPostCommentsMe } from '@apis/posts';

import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';

const WriteCommentList = () => {
    const observerRef = useRef(null);

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: commentList, hasNextPage, fetchNextPage } = useGetPostCommentsMe(search);

    // // useObserver로 넘겨줄 callback, entry로 넘어오는 HTMLElement가
    // // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행될 것이다.
    // const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

    // // useObserver로 observerRef와 onIntersect를 넘겨 주자.
    // useObserver({
    //     target: observerRef,
    //     onIntersect,
    // });

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
            <form>
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
                    commentList.map((item) => <ListItem key={item.id} id={item.id} content={item.content} createAt={item.createAt} />)
                ) : (
                    <Empty title="작성한 댓글이 없습니다" subTitle="첫 댓글을 남겨보러 갈까요?" buttonTitle="댓글 작성하러 가기" href="/home" />
                )}
                <div className="loader" ref={observerRef}>
                    {hasNextPage ? <Loading /> : null}
                </div>
            </ListBox>
        </div>
    );
};

export default WriteCommentList;
