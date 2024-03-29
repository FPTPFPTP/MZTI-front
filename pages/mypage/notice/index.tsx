import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Input, Loading } from '@components/Commons';
import { ListBox, ListItem } from '@components/MyPageCom';
import { Layout, noticeText } from '@styles/pages/mypageStyled';
import { useGetNotice } from '@/apis/notice';
import PageError from '@assets/icons/common/page_error.svg';

const notice = () => {
    const observerRef = useRef(null);

    const { register, watch, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const { contents: noticeList, hasNextPage, fetchNextPage } = useGetNotice(search);

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
            <Header title={'공지사항'} isBgWhite={true} />
            <div css={Layout}>
                <form>
                    <Input
                        inputStyle={'search'}
                        placeholder={'공지사항 검색'}
                        isResetBtn={!!search}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('search')}
                    />
                </form>
                <ListBox>
                    {noticeList.length > 0 ? (
                        noticeList.map((item) => <ListItem key={item.id} item={item} url={`/mypage/notice/${item.id}`} />)
                    ) : (
                        <div css={noticeText}>공지사항이 없습니다.</div>
                    )}

                    <div className="loader" ref={observerRef}>
                        {hasNextPage ? <Loading /> : null}
                    </div>
                </ListBox>
            </div>
        </>
    );
};

export default notice;
