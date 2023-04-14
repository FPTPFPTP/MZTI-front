import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { Input } from '@components/Commons';
import NonSSRWrapper from '@/components/Layout/NonSSRWrapper';
import FeedItem from '@/components/Home/FeedItem';
import { SearchHistoryItem } from '@components/Search';
import { getFeedPost } from '@/apis/post';
import useSearchHistory from '@/hooks/useSearchHistory';
import { searchWrap, recentSearchWrap } from '@/styles/pages/searchStyled';

interface ISearchProps {
    id: number;
}

const Search = (props: ISearchProps) => {
    const { id } = props;
    const [searchValue, setSearchValue] = useState<string>('');

    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const router = useRouter();

    // 최근 검색어
    const { searchHistories, removeSearchHistory, addSearchHistory } = useSearchHistory();

    // 데이터 패칭
    const {
        data: searchList,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(['page', searchValue], ({ pageParam = 0 }) => getFeedPost({ page: pageParam, content: searchValue, categoryId: id }), {
        getNextPageParam: (lastPage, allPosts) => {
            return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
        },
        enabled: searchValue.length === 0 ? false : true,
    });

    const onSearch = (text: string) => {
        addSearchHistory(text, dayjs().format());
        setSearchValue(text);
    };

    return (
        <section>
            <div css={searchWrap}>
                <div className="search__box">
                    <form onSubmit={handleSubmit((data) => onSearch(data.search))}>
                        <Input
                            inputStyle={'search'}
                            placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                            isResetBtn={true}
                            handleReset={() => (!!search === false ? router.back() : reset())}
                            maxLength={16}
                            {...register('search')}
                        />
                    </form>
                </div>

                <div className="search__filter">
                    <p>필터: '전체'</p>
                    <p>최신순</p>
                </div>
            </div>

            {/* 최근 검색 내역 */}
            <div css={recentSearchWrap}>
                {searchList && searchList.pages.length ? (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                        <FeedItem data={searchList} />
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
                                            onClick={() => console.log('ㅈㅓㄴ체클릭')}
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

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    return {
        props: {
            id: params.id,
        },
    };
};
