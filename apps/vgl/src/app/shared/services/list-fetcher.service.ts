import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { IPaginatedResults } from '../interfaces/paginated-results.interface';
import { WebService } from './web.service';
import { IListFetcherService } from './list-fetcher.service.interface';
import { IList } from '../interfaces/list.interface';

@Injectable({
  providedIn: 'root'
})

export class ListFetcherService implements IListFetcherService {

  constructor(private web: WebService) { }

  getLists(page: number): Observable<IPaginatedResults<IList>> {
    const endpoint = environment.API.LISTS.ALL;

    return this.web.get(endpoint, { page: page.toString(), limit: '10' });
  }

  /**
   * Returns own lists
   * Due to json-server limitations we simply pass in our id
   * But in real backend service will have it's own endpoint to avoid fetching any users lists
   * */
  getOwnLists(): Observable<IList[]> {
    const endpoint = environment.API.LISTS.ALL;
    const params = {id: "1"};
    return this.web.get(endpoint);
  }

  /**
   * Gets a game by its Id
   * @param slug The slug of the object
   * @returns
   */
  getListBySlug(slug: string): Observable<IList> {
    const endpoint = `${environment.API.LISTS.SINGLE}/`;
    return this.web.get<IList[]>(endpoint, { slug }).pipe(
      map((result) => result[0])
    );

  }

  getListById(id: string): Observable<IList> {
    const endpoint = `${environment.API.LISTS.SINGLE}/`;
    return this.web.get<IList[]>(endpoint, { id }).pipe(
      map((result) => result[0])
    );

  }

}
