import { Observable } from "rxjs";
import { IPaginatedResults } from "../interfaces";
import { IList } from "../interfaces/list.interface";

export interface IListFetcherService {

    getLists(page: number): Observable<IPaginatedResults<IList>>
    getListBySlug(slug: string): Observable<IList>
    getListById(id: string): Observable<IList>
}
