import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { Empty, ListBox, ListItem } from '@components/MyPageCom';
import { useObserver } from '@/hooks/useObserver';
import { useGetWrites } from '@apis/mypage';
import EditSvg from '@assets/icons/edit.svg';
import { Layout } from '@styles/pages/mypageStyled';

const WriteList = () => {
    const observerRef = useRef(null);

    const [searchValue, setSearchValue] = useState<string>('');

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: writeList, hasNextPage, fetchNextPage } = useGetWrites(searchValue);

    // useObserver로 넘겨줄 callback, entry로 넘어오는 HTMLElement가
    // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행될 것이다.
    const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

    // useObserver로 observerRef와 onIntersect를 넘겨 주자.
    useObserver({
        target: observerRef,
        onIntersect,
    });

    const onSubmit = (data: { search: string }) => {
        setSearchValue(data.search);
    };

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
                {writeList.length ? (
                    writeList.map((item) => <ListItem key={item.id} id={item.id} title={item.title} date={item.date} thumbnail={item.thumbnail} />)
                ) : (
                    <>
                        {searchValue.length ? (
                            <Empty
                                title="검색 결과가 없습니다"
                                subTitle="정확한 검색어를 입력해주세요"
                                buttonTitle="글 작성하러 가기"
                                href="/mypage/writeList"
                            />
                        ) : (
                            <Empty title="작성한 글이 없습니다" subTitle="첫 글을 남겨보러 갈까요?" buttonTitle="목록으로" href="/" />
                        )}
                    </>
                )}
                <div className="loader" ref={observerRef}>
                    {hasNextPage ? <Loading /> : null}
                </div>
            </ListBox>
        </div>
    );
};

export default WriteList;
