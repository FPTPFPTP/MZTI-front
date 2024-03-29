import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading, BottomMenu } from '@components/Commons';
import { Empty, ListBox, ListBoardItem } from '@components/MyPageCom';
import { Layout } from '@styles/pages/mypageStyled';
import { useGetBookMarkMe } from '@/apis/post';
import { getThumbnail } from '@/utils/postItem';
import EmptyBookmark from '@assets/icons/common/empty_bookmark.svg';
import SearchIcon from '@assets/icons/common/search_blank.svg';

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
            <Header title={'내가 저장한 글'} isBgWhite={true} />
            <div css={Layout}>
                <form>
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
                    {bookMakrList.length ? (
                        bookMakrList.map((item) => {
                            const thumbnail = getThumbnail(item.content);

                            return <ListBoardItem key={item.id} item={item} thumbnail={thumbnail} />;
                        })
                    ) : (
                        <>
                            {search && search.length ? (
                                <Empty
                                    title="검색 결과가 없어요"
                                    subTitle="정확한 검색어를 입력했는지\n다시 한 번 확인해주세요"
                                    buttonTitle="글 작성하러 가기"
                                    href="/mypage/writeList"
                                    icon={<SearchIcon />}
                                />
                            ) : (
                                <Empty
                                    title="저장한 글이 없어요"
                                    subTitle="새로운 게시글을 살펴보러 갈까요?"
                                    buttonTitle="메인화면으로 가기"
                                    href="/home"
                                    icon={<EmptyBookmark />}
                                />
                            )}
                        </>
                    )}
                    <div className="loader" ref={observerRef}>
                        {hasNextPage ? <Loading /> : null}
                    </div>
                </ListBox>
            </div>
            <BottomMenu />
        </>
    );
};

export default BookMarkList;
