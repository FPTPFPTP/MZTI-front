export interface StringKeyObject<T> {
    [key: string]: T;
}

export interface IPaginationResponse<T> {
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
