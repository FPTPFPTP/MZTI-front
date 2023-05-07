import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroller';
import dayjs from 'dayjs';
import { Header, Input } from '@components/Commons';
import NonSSRWrapper from '@/components/Layout/NonSSRWrapper';
import { Empty, ListBoardItem } from '@components/MyPageCom';
import { SearchHistoryItem } from '@components/Search';
import { useGetPosts } from '@/apis/post';
import { getThumbnail } from '@/utils/postItem';
import useSearchHistory from '@/hooks/useSearchHistory';
import { searchWrap, recentSearchWrap } from '@/styles/pages/searchStyled';
import SearchIcon from '@assets/icons/common/search_blank.svg';

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const { register, watch, handleSubmit, reset, setValue } = useForm<{ search: string }>();
    const { search } = watch();

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
            <Header isBgWhite={true} />

            <div css={searchWrap}>
                <form className="search__box" onSubmit={handleSubmit((data) => onSearch(data.search))}>
                    <Input
                        inputStyle={'search'}
                        placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                        isResetBtn={!!search}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('search')}
                    />
                </form>
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
                        {searchValue.length ? (
                            <Empty
                                title="검색 결과가 없어요"
                                subTitle="정확한 검색어를 입력했는지 \n 다시 한 번 확인해주세요"
                                icon={<SearchIcon />}
                                buttonTitle={'목록으로'}
                                onClick={() => {
                                    setSearchValue('');
                                    setValue('search', '');
                                }}
                            />
                        ) : (
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
                                    <Empty
                                        title="최근 검색어 내역이 없어요"
                                        subTitle="정확한 검색어를 입력했는지 <br/> 다시 한 번 확인해주세요"
                                        icon={<SearchIcon />}
                                    />
                                )}
                            </NonSSRWrapper>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Search;
