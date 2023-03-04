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
