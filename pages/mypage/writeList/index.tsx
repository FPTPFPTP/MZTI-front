import React, { useRef, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/MyPageCom';
// import { useObserver } from '@/hooks/useObserver';
import { Layout } from '@styles/pages/mypageStyled';
import { useGetPostsMe } from '@/apis/post';
import EmptyWrite from '@assets/icons/common/empty_write.svg';
import SearchIcon from '@assets/icons/common/search_blank.svg';

const WriteList = () => {
    const observerRef = useRef(null);

    const { register, watch, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: writeList, hasNextPage, fetchNextPage } = useGetPostsMe(search);
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
            <Header title={'내가 작성한 글'} />
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
                    {writeList.length ? (
                        writeList.map((item) => {
                            // 이미지 있을 때 첫번째 이미지만 가져오기
                            let thumbnail;

                            const list = item.content.match(/(<(img[^>]+)>)/g);
                            if (list && list.length) {
                                const myRegex = /<img[^>]+src="(https:\/\/[^">]+)"/g;

                                const result = myRegex.exec(list[0]);
                                if (result !== null) {
                                    thumbnail = result[1];
                                }
                            }

                            return <ListItem key={item.id} item={item} url={`/boardDetail/${item.id}`} thumbnail={thumbnail} />;
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
                                    title="작성한 글이 없어요"
                                    icon={<EmptyWrite />}
                                    subTitle="첫 글을 남겨보러 갈까요?"
                                    buttonTitle="글 작성하러 가기"
                                    href="/home"
                                />
                            )}
                        </>
                    )}
                    <div className="loader" ref={observerRef}>
                        {hasNextPage ? <Loading /> : null}
                    </div>
                </ListBox>
            </div>
        </>
    );
};

export default WriteList;
