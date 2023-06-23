import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IGame, IGameExpanded } from '../interfaces/game.interface';
import { IPaginatedResults } from '../interfaces/paginated-results.interface';
import { IGameFetcherService } from './game-fetcher.service.interface';
import { WebService } from './web.service';

@Injectable({
    providedIn: 'root'
  })

export class GameFetcherService implements IGameFetcherService {

    constructor(private web: WebService) {}

    /**
     * Gets a game by its Id
     * @param id The id of the object
     * @returns
     */
    getGameById(id: string): Observable<IGameExpanded> {
        const endpoint = `${environment.API.GAMES.SINGLE}/${id}`;
        const params = {expand: ['platform', 'developer']};
        return this.web.get(endpoint, params);
    }

    getGamesByIds(ids: string[]): Observable<IGameExpanded[]> {
      const endpoint = `${environment.API.GAMES.SINGLE}`;

      return this.web.get(endpoint, { id: ids });
    }

    getGamesByPlatform(platformId: string, page: number = 1): Observable<IPaginatedResults<IGame>> {
        const endpoint = environment.API.GAMES.ALL;
        return this.web.get(endpoint, {platformId, page: page.toString(), limit: '10'});
    }

    getGamesByGenre(genreId: string): Observable<IPaginatedResults<IGame>> {
        const endpoint = environment.API.GAMES.SINGLE;
        return this.web.get(endpoint, {genreId});
    }
}
