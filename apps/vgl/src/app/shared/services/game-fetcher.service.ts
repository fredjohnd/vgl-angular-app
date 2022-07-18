import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IGame } from '../interfaces/game.interface';
import { IPaginatedResults } from '../interfaces/paginated-results.interface';
import { IGameFetcherService } from './game-fetcher.service.interface';
import { WebService } from './web.service';

@Injectable({
    providedIn: 'root'
  })

export class GameFetcherService implements IGameFetcherService {

    constructor(private web: WebService) {}

    getGameById(id: string): Observable<IGame> {
        const endpoint = `${environment.API.GAMES.SINGLE}/${id}`;
        return this.web.get(endpoint);
    }

    getGamesByPlatform(platformId: string, page: number = 1): Observable<IPaginatedResults<IGame>> {
        const endpoint = environment.API.GAMES.ALL;
        return this.web.get(endpoint, {platformId, page: page.toString(), limit: '2'});
    }

    getGamesByGenre(genreId: string): Observable<IPaginatedResults<IGame>> {
        const endpoint = environment.API.GAMES.SINGLE;
        return this.web.get(endpoint, {genreId});
    }
}
