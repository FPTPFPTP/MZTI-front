import { Input } from '@components/Commons';
import { searchWrap, recentSearchWrap } from '@/styles/pages/homeStyled';
import SearchCloseIcon from '@assets/icons/home/searchClose.svg';

interface SearchProp {
    searchClose: () => void;
}

const Search = ({ searchClose }: SearchProp) => {
    return (
        <section>
            <div css={searchWrap}>
                <div className="search__box">
                    <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} />
                    <button onClick={searchClose}>
                        <SearchCloseIcon />
                    </button>
                </div>

                <div className="search__filter">
                    <p>필터: '전체'</p>
                    <p>최신순</p>
                </div>
            </div>

            {/* 최근 검색 내역 */}
            <div css={recentSearchWrap}>
                <div className="recent__wrap">
                    <div className="recent__search--top">
                        <p>최근 검색어</p>
                        <button>내역 전체 삭제</button>
                    </div>

                    <div className="recent__search--desc">최근 검색어 내역이 없어요</div>
                </div>
            </div>
        </section>
    );
};

export default Search;
