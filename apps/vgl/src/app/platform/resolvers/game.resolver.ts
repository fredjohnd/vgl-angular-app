import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IGame } from '../../shared/interfaces/game.interface';
import { GameFetcherService } from '../../shared/services/game-fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolver  {

  constructor(private gameFetcher: GameFetcherService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IGame> {
    const param = route.params['gameId'];
    const id = param.split('-')[0];
    return this.gameFetcher.getGameById(id);
  }
}
