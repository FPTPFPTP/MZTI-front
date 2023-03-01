import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { Header, Input } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/Mypage';
import { getWriteList } from '@apis/mypage';
import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';

const WriteList = () => {
    const observerRef = useRef(null);

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const {
        data: writeList,
        isSuccess,
        hasNextPage,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(
        ['writeList'],
        ({ pageParam = 0 }) => {
            console.log({ pageParam });
            return getWriteList({ pageParam, search });
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
        console.log({ writeList });
    }, [writeList]);

    return (
        <div css={Layout}>
            <Header title={'내가 작성한 글'} rightElement={<EditSvg />} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'search'}
                    placeholder={'글 제목, 글 본문 내용 등 검색'}
                    isResetBtn={!!search}
                    handleReset={() => reset()}
                    maxLength={8}
                    {...register('search')}
                />
            </form>
            <ListBox>
                {isSuccess &&
                    writeList.pages.map((page) => page.contents.map((item) => <ListItem key={item.id} number={item.id} title={item.title} date={item.date} />))}
                <div className="loader" ref={observerRef}>
                    {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
                </div>
            </ListBox>
        </div>
    );
};

export default WriteList;
