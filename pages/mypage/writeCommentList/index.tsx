import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListCommentItem } from '@components/MyPageCom';
import { Layout } from '@styles/pages/mypageStyled';
import { useGetPostCommentsMe } from '@/apis/post';
import EmptyWrite from '@assets/icons/common/empty_write.svg';

const WriteCommentList = () => {
    const observerRef = useRef(null);

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: commentList, hasNextPage, fetchNextPage } = useGetPostCommentsMe(search);

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
            <Header title={'내가 작성한 댓글'} />
            <div css={Layout}>
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
                        commentList.map((item, index) => <ListCommentItem key={index} item={item} />)
                    ) : (
                        <Empty
                            icon={<EmptyWrite />}
                            title="작성한 댓글이 없어요"
                            subTitle="첫 댓글을 남겨보러 갈까요?"
                            buttonTitle="댓글 작성하러 가기"
                            href="/home"
                        />
                    )}
                    <div className="loader" ref={observerRef}>
                        {hasNextPage ? <Loading /> : null}
                    </div>
                </ListBox>
            </div>
        </>
    );
};

export default WriteCommentList;
