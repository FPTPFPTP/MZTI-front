import { useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { useSetRecoilState } from 'recoil';
import { Input } from '@components/Commons';
import { postEditState } from '@/recoil/atom/post';
import { Empty } from '@/components/MyPageCom';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { BottomMenu, MoreDrawer } from '@components/Commons';
import ListTab from '@/components/Home/ListTab';
import FeedHeader from '@/components/Commons/FeedHeader';
import { getFeedPost, deletePost } from '@/apis/post';
import useScrollDown from '@/hooks/useScrollDown';
import { openToast } from '@utils/toast';
import { FeedContentStyle } from '@styles/pages/homeStyled';
import { EActionEditType } from '@/types/post';
import EmptyWrite from '@assets/icons/common/empty_write.svg';
import { SearchWrapStyle } from '@/components/Commons/FeedHeader/styled';

const home = () => {
    const [countIndex, setCountIndex] = useState<number | undefined>(22);
    // 게시글 & 댓글 수정, 삭제, 신고 Drawer
    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

    const isCurrentScrollTop = useScrollDown(65);

    const setEditTarget = useSetRecoilState(postEditState);

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
        ['page', countIndex],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, categoryId: countIndex, view: 10 }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );
    const router = useRouter();

    const openDrawer = (id: number, type: EActionEditType) => {
        setEditTarget({
            id,
            editActionType: type,
        });
        setIsDrawerVisible(true);
    };

    const closeDrawer = () => setIsDrawerVisible(false);

    const onTargetEdit = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.WRITE) {
            router.push(`/write/${id}`);
        }
    };

    const onTargetDelete = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.WRITE) {
            const res = await deletePost(id);
            if (res.code === 'SUCCESS') {
                openToast({ message: '삭제 완료되었습니다.' });
            } else {
                openToast({ message: '삭제 실패했습니다. 다시 시도해주세요.' });
            }
        }
    };

    return (
        <main className="homeLayout">
            {/* 헤더 */}
            <FeedHeader isCurrentScrollTop={isCurrentScrollTop} />

            <div css={FeedContentStyle} id={'feedContent'}>
                <div css={SearchWrapStyle}>
                    <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} onClick={() => router.push(`/search`)} />
                </div>
                {/* 인기 게시판 & 전체 게시판 */}
                <ListTab categoryId={countIndex} handleCategoryId={(id) => setCountIndex(id)} />

                {/* 핫토픽 키워드 */}
                <HotKeyword title="🔥 실시간 HOT 키워드" more={true} />

                {/* 피드 게시물 */}
                {data && data.pages.length && data.pages[0].list.length !== 0 ? (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                        <FeedItem data={data} isLoading={isLoading} openDrawer={openDrawer} />
                    </InfiniteScroll>
                ) : (
                    <Empty icon={<EmptyWrite />} title="작성된 글이 없습니다." subTitle={`게시글을 작성해주세요`} />
                )}
            </div>
            {/* 메뉴 */}
            <BottomMenu />

            <MoreDrawer isVisible={isDrawerVisible} onClose={closeDrawer} handleTargetEdit={onTargetEdit} handleTargetDelete={onTargetDelete} />
        </main>
    );
};

export default home;
