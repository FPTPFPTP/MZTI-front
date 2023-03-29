export interface StringKeyObject<T> {
    [key: string]: T;
}

export interface IPaginationResponseFake<T> {
    contents: T[];
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    isLastPage: boolean;
    isFirstPage: boolean;
}

export interface IResponseBase<T> {
    code: 'SUCCESS' | 'FAILURE';
    message: string;
    data: T;
}

export interface IPageObjReqModel {
    page: number;
    view: number;
    search?: string;
}

export interface IPaginationResponse<T> {
    list: T[];
    page: number;
    view: number;
    totalPage: number;
    totalCount: number;
}
