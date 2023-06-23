import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, of, switchMap } from 'rxjs';
import { IPaginatedResults } from '../interfaces/paginated-results.interface';
import { WebService } from './web.service';
import { IListProcessorService } from './list-processor.service.interface';
import { ListFetcherService } from './list-fetcher.service';
import { IList } from '../interfaces/list.interface';

@Injectable({
  providedIn: 'root'
})

export class ListProcessorService implements IListProcessorService {

  constructor(private web: WebService, private listFetcher: ListFetcherService) { }

  /**
   * Adds a specific game to an existing List
   * Due to limitations of JSON-server We have to fetch and resave the payload
   * With a real backend we will have a specific endpoint to simply add gameId to listId
   * @param listId The list Id
   * @param gameId The game Id we want to put in the list
   * @returns
   */
  addGameToList(listId: string, gameId: string): Observable<IList> {
    return this.listFetcher.getListById(listId).pipe(
      switchMap((list) => of({...list, gameIds: [...list.gameIds, gameId]})),
      switchMap((listPayload) => this.saveList(listPayload))
    )
  }

  saveList(list: IList): Observable<IList> {
    const endpoint = `${environment.API.LISTS.SINGLE}/${list.id}`;
    return this.web.put<IList>(endpoint, list);
  }

  removeGameFromList(): Observable<boolean> {
    return of(true);
  }

}
