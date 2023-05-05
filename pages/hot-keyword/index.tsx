import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useRecoilState } from 'recoil';
import { hotKeywordsState } from '@/recoil/atom/hotKeyword';
import { BottomMenu, Header } from '@components/Commons';
import { Empty, ListBoardItem } from '@components/MyPageCom';
import HotKeyword from '@/components/Home/HotKeyword';
import { useGetPosts } from '@/apis/post';
import { getThumbnail } from '@/utils/postItem';
import useScrollDown from '@/hooks/useScrollDown';
import { HotKeywordMenu, FeedContentStyle } from '@styles/pages/hotKeywordStyled';
import SearchIcon from '@assets/icons/common/search_blank.svg';
import ArrowDownIcon from '@assets/icons/arrow_down.svg';

const keywordBoard = () => {
    const [hotKeyword, setHotKeyword] = useRecoilState(hotKeywordsState);
    // 데이터 패칭
    const { contents: searchList, hasNextPage, fetchNextPage } = useGetPosts({ search: hotKeyword });

    const isCurrentScrollTop = useScrollDown();

    useEffect(() => {
        return () => setHotKeyword('');
    }, []);

    return (
        <main className="homeLayout">
            {/* 헤더 */}
            <Header isPrevBtn={true} title="🔥실시간 HOT 키워드" />

            <div css={HotKeywordMenu}>
                {isCurrentScrollTop ? <HotKeyword title="지금 사람들이 가장 궁금해하는건?" more={false} /> : null}

                <section className="titleSection">
                    <h3>{hotKeyword}</h3>
                    <button>
                        최신순 <ArrowDownIcon />
                    </button>
                </section>
            </div>

            <section css={FeedContentStyle({ isCurrentScrollTop })}>
                {/* 피드 게시물 */}
                {searchList.length ? (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                        {searchList.map((item) => {
                            const thumbnail = getThumbnail(item.content);

                            return <ListBoardItem key={item.id} item={item} thumbnail={thumbnail} />;
                        })}
                    </InfiniteScroll>
                ) : (
                    <Empty
                        title="검색 결과가 없어요"
                        subTitle="정확한 검색어를 입력했는지\n다시 한 번 확인해주세요"
                        buttonTitle="글 작성하러 가기"
                        href="/mypage/writeList"
                        icon={<SearchIcon />}
                    />
                )}
            </section>
            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default keywordBoard;
