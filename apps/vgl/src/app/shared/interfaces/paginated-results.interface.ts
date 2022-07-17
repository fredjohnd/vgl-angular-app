export interface IPaginatedResults<T> { 
    currentPage: number;
    totalPages: number;
    results: Array<T>;
}   