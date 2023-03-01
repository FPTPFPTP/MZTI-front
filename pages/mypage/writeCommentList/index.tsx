import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { Header, Input } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/Mypage';
import { getWriteCommentList } from '@apis/mypage';
import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';

const WriteCommentList = () => {
    const observerRef = useRef(null);

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const {
        data: commentList,
        isSuccess,
        hasNextPage,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(
        ['writeList'],
        ({ pageParam = 0 }) => {
            return getWriteCommentList({ pageParam, search });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = allPages.length + 1;

                return lastPage.contents.length !== 0 ? nextPage : undefined;
            },
        },
    );

    const queryClient = useQueryClient();

    const onSubmit = (data: { search: string }) => {
        queryClient.invalidateQueries(['writeList']);
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

    useEffect(() => {
        console.log({ commentList });
    }, [commentList]);

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
                {isSuccess &&
                    commentList.pages.map((page) =>
                        page.contents.map((item) => <ListItem key={item.id} number={item.id} title={item.title} date={item.date} />),
                    )}
                <div className="loader" ref={observerRef}>
                    {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
                </div>
            </ListBox>
        </div>
    );
};

export default WriteCommentList;
