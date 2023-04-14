import Axios from '@utils/axios';
import { IBoardModel } from '@/types/board';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { IResponseBase, IPageObjReqModel, IPaginationResponse } from '@/types/global';
import { IDetailPost, ITagModel, IMyPageActive, IPostMeModel, IPostModel, IPollModel, IAddComment } from '@/types/post';

export interface IPostWriteReq extends Pick<IPostModel, 'title' | 'categoryId' | 'content'> {
    tagList: number[];
    pollList: Pick<IPollModel, 'title' | 'startDate' | 'endDate' | 'checkCount'>[];
}

interface IPutPostReq extends Pick<IPostModel, 'id' | 'title' | 'categoryId' | 'content'> {
    tagList: number[];
}

/**
 * [API] GET 피드 불러오기
 * @param param0
 * @returns
 */
export const getFeedPost = async ({ page, content, view, tag, categoryId }: IDetailPost) => {
    const res = await Axios.get<IResponseBase<any>>(`/post`, {
        params: {
            page,
            view,
            content,
            tag,
            categoryId,
        },
    });
    return res.data.data;
};

/**
 * [API] GET 마이페이지 내 활동 조회 (작성한 글, 댓글, 받은 추천수)
 * @returns
 */
export const getMyPageActive = async () => {
    const res = await Axios.get<IResponseBase<IMyPageActive>>('/post/user');
    return res.data.data;
};

export const useGetMyPageActive = () => {
    const { data } = useQuery(['myPageActive'], async () => {
        const data = await getMyPageActive();

        return data;
    });

    return data;
};

/**
 * [API] GET 카테고리
 * @returns
 */
export const getBoards = async () => {
    const res = await Axios.get<IResponseBase<IBoardModel[]>>('/post/category');

    return res.data.data;
};

export const useGetBoards = () => {
    const { data } = useQuery(['getBoards'], async () => {
        const data = await getBoards();

        return data;
    });

    return data;
};

/**
 * [API] GET 마이페이지 > 내가 작성한 게시물 조회
 * @param param0
 * @returns
 */
export const getPostsMe = async ({ page, view, search }: IPageObjReqModel) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IPostMeModel>>>('/post/me', { params: { page, view, search } });

    return res.data.data;
};

export const useGetPostsMe = (search: string) => {
    const res = useInfiniteQuery(['postsMe', search], ({ pageParam = 0 }) => getPostsMe({ page: pageParam, view: 15, search }), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1;

            return lastPage.list.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data ? data.pages.map((page) => page.list).reduce((mergedList, currentlist) => [...mergedList, ...(currentlist || [])], []) : [];

    return { ...res, contents };
};

/**
 * [API] GET 마이페이지 > 내가 작성한 댓글 조회
 * @param param0
 * @returns
 */
export const getPostCommentsMe = async ({ page, view, search }: IPageObjReqModel) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IPostMeModel>>>('/post/comment/me', { params: { page, view, search } });

    return res.data.data;
};

export const useGetPostCommentsMe = (search: string) => {
    const res = useInfiniteQuery(['postCommentsMe', search], ({ pageParam = 0 }) => getPostCommentsMe({ page: pageParam, view: 15, search }), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1;
            return lastPage.list.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data ? data.pages.map((page) => page.list).reduce((mergedList, currentlist) => [...mergedList, ...(currentlist || [])], []) : [];

    return { ...res, contents };
};

/**
 * [API] GET 마이페이지 > 내가 북마크한 게시글
 * @param param0
 * @returns
 */
export const getBookMarkMe = async ({ page, view, search }: IPageObjReqModel) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IPostMeModel>>>('/post/bookmark/me', { params: { page, view, search } });

    return res.data.data;
};

export const useGetBookMarkMe = (search: string) => {
    const res = useInfiniteQuery(['bookMarkMe', search], ({ pageParam = 0 }) => getBookMarkMe({ page: pageParam, view: 15, search }), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1;
            return lastPage.list.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data ? data.pages.map((page) => page.list).reduce((mergedList, currentlist) => [...mergedList, ...(currentlist || [])], []) : [];

    return { ...res, contents };
};

/**
 * [API] POST 게시글 작성
 * @param form
 * @returns
 */
export const postWrite = async (form: IPostWriteReq) => {
    const res = await Axios.post<IResponseBase<any>>('/post', { ...form });

    return res.data;
};

/**
 * [API] GET 태그 불러오기
 * @param param0
 * @returns
 */
export const getTags = async ({ tag }: { tag: string }) => {
    const res = await Axios.get<IResponseBase<ITagModel[]>>('/post/tag', { params: { tag: tag.length ? tag : undefined } });

    return res.data.data;
};

/**
 * [API] POST 태그
 * @param tagTitle
 * @returns
 */
export const postTag = async (tagTitle: string) => {
    const res = await Axios.post<IResponseBase<ITagModel>>('/post/tag', { tag: tagTitle });

    return res.data.data;
};

export const useGetTags = (tag: string) => {
    const { data } = useQuery(['getTags', tag], async () => {
        const data = await getTags({ tag });

        return data;
    });

    return data;
};

/**
 * [API] GET 게시글 상세페이지 불러오기
 * @param param0
 * @returns
 */
export const getPost = async ({ postId }: { postId: number }) => {
    const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${postId}`);

    return res.data.data;
};

/**
 * [API] PUT 게시글 수정하기
 * @param form
 * @returns
 */
export const putPost = async (form: IPutPostReq) => {
    const res = await Axios.put<IResponseBase<IPostModel>>(`/post`, { ...form });

    return res.data.data;
};

/**
 * [API] POST 게시글 좋아요
 * @param postId
 * @returns
 */
export const postLike = async (postId: any) => {
    const res = await Axios.post<IResponseBase<any>>(`/post/like/${postId}`);

    return res.data.data;
};

/**
 * [API] DELETE 게시글 삭제
 * @param postId
 * @returns
 */
export const deletePost = async (postId: any) => {
    const res = await Axios.delete<IResponseBase<any>>(`/post/${postId}`);

    return res.data.data;
};

/**
 * [API] POST 북마크 생성/삭제
 * @param postId
 * @returns
 */
export const postBookmark = async (postId: any) => {
    const res = await Axios.post<IResponseBase<any>>(`/post/bookmark/${postId}`);

    return res.data.data;
};

/**
 * [API] POST 댓글 좋아요
 * @param postId
 * @returns
 */
export const commentLike = async (postId: number) => {
    const res = await Axios.post<IResponseBase<any>>(`/post/comment/like/${postId}`);

    return res.data.data;
};

/**
 * [API] POST 댓글 작성하기
 * @param param0
 * @returns
 */
export const commentPost = async ({ postId, comment, image }: IAddComment) => {
    const res = await Axios.post<IResponseBase<IAddComment>>(`/post/comment`, {
        postId: postId,
        comment: comment,
        image: image,
    });

    return res.data.data;
};

/**
 * [API] DELETE 댓글 삭제
 * @param postId
 * @returns
 */
export const deleteComment = async (postId: any) => {
    const res = await Axios.delete<IResponseBase<any>>(`/post/comment/${postId}`);

    return res.data.data;
};

/**
 * [API] POST 대댓글 작성하기
 * @param param0
 * @returns
 */
export const reCommentPost = async ({ postId, comment, image }: IAddComment) => {
    const res = await Axios.post<IResponseBase<IAddComment>>(`/post/comment/sub`, {
        postId: postId,
        comment: comment,
        image: image,
    });

    return res.data.data;
};
