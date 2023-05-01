import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroller';
import dayjs from 'dayjs';
import { Header, Input } from '@components/Commons';
import NonSSRWrapper from '@/components/Layout/NonSSRWrapper';
import { Empty, ListBox, ListBoardItem } from '@components/MyPageCom';
import { SearchHistoryItem } from '@components/Search';
import { useGetPosts } from '@/apis/post';
import { getThumbnail } from '@/utils/postItem';
import useSearchHistory from '@/hooks/useSearchHistory';
import { searchWrap, recentSearchWrap } from '@/styles/pages/searchStyled';

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const { register, watch, handleSubmit, reset, setValue } = useForm<{ search: string }>();
    const { search } = watch();

    const router = useRouter();

    // 최근 검색어
    const { searchHistories, removeSearchHistory, addSearchHistory } = useSearchHistory();

    // 데이터 패칭
    const { contents: searchList, hasNextPage, fetchNextPage } = useGetPosts({ search: searchValue });

    const onSearch = (text: string) => {
        addSearchHistory(text, dayjs().format());
        setSearchValue(text);
    };

    return (
        <section>
            <Header title={'전체 검색'} />

            <div css={searchWrap}>
                <div className="search__box">
                    <form onSubmit={handleSubmit((data) => onSearch(data.search))}>
                        <Input
                            inputStyle={'search'}
                            placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                            isResetBtn={true}
                            handleReset={() => (!!search === false ? router.back() : reset())}
                            maxLength={8}
                            {...register('search')}
                        />
                        {/* <button>
                        <SearchCloseIcon />
                    </button> */}
                    </form>
                </div>

                <div className="search__filter">
                    <p>필터: '전체'</p>
                    <p>최신순</p>
                </div>
            </div>

            {/* 최근 검색 내역 */}
            <div css={recentSearchWrap}>
                {searchList.length ? (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                        {searchList.map((item) => {
                            const thumbnail = getThumbnail(item.content);

                            return <ListBoardItem key={item.id} item={item} thumbnail={thumbnail} />;
                        })}{' '}
                    </InfiniteScroll>
                ) : (
                    <div className="recent__wrap">
                        <div className="recent__search--top">
                            <p>최근 검색어</p>
                            <button>내역 전체 삭제</button>
                        </div>

                        <NonSSRWrapper>
                            {searchHistories.length ? (
                                <>
                                    {searchHistories.map((search, index) => (
                                        <SearchHistoryItem
                                            key={index}
                                            searchText={search.searchText}
                                            date={search.date}
                                            onClick={() => {
                                                setValue('search', search.searchText);
                                                setSearchValue(search.searchText);
                                                addSearchHistory(search.searchText, dayjs().format());
                                            }}
                                            onDelete={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                removeSearchHistory(search.searchText);
                                            }}
                                        />
                                    ))}
                                </>
                            ) : (
                                <div className="recent__search--desc">최근 검색어 내역이 없어요</div>
                            )}
                        </NonSSRWrapper>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Search;
