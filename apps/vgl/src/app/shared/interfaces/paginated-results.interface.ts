export interface IPaginatedResults<T> {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    results: Array<T>;
}
