import { Input } from '@components/Commons';
import { searchWrap, recentSearchWrap } from '@/styles/pages/homeStyled';
import SearchCloseIcon from '@assets/icons/home/searchClose.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';
import { Empty } from '@/components/MyPageCom';

interface SearchProp {
    searchClose: () => void;
}

const Search = ({ searchClose }: SearchProp) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = () => {
        setSearchText('');
    };
    return (
        <section>
            <div css={searchWrap}>
                <div className="search__box">
                    <Input inputStyle={'search'} placeholder={''} />
                    <button onClick={searchClose}>
                        <SearchCloseIcon />
                    </button>
                </div>

                <div className="search__filter">
                    <p>필터: '전체'</p>
                    <p>최신순</p>
                </div>
            </div>

            {searchText.length > 0 ? (
                <Empty title="검색 결과가 없습니다" subTitle="다른 검색어로 검색해보세요" onClick={handleSearch} buttonTitle="돌아가기" />
            ) : (
                // 최근 검색 내역
                <div css={recentSearchWrap}>
                    <div className="recent__wrap">
                        <div className="recent__search--top">
                            <p>최근 검색어</p>
                            <button>내역 전체 삭제</button>
                        </div>

                        <div className="recent__search--desc">최근 검색어 내역이 없어요</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Search;
