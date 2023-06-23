import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, tap, takeUntil, Observable, Subject, switchMap, concatMap, mergeMap } from 'rxjs';
import { IGameExpanded } from '../../../shared/interfaces';
import { IList, IListWithGames } from '../../../shared/interfaces/list.interface';
import { GameFetcherService } from '../../../shared/services/game-fetcher.service';
import { ListFetcherService } from '../../../shared/services/list-fetcher.service';

@Component({
  selector: 'vgl-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailComponent implements OnInit, OnDestroy {

  list$: Observable<IListWithGames>;
  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private listFetcher: ListFetcherService, private gameFetcher: GameFetcherService) {}

  ngOnInit(): void {
    this.list$ = this.route.params.pipe(
      map((data: Data) => data['slug']),
      switchMap((slug: string) => this.loadModel(slug)),
      mergeMap((list: IList) => this.loadGamesInList(list.gameIds).pipe(
        map((games: IGameExpanded[]) => ({...list, games}))
      )),

      takeUntil(this.destroyed$),
    )
  }

  loadModel(slug: string) {
    return this.listFetcher.getListBySlug(slug).pipe(
      tap(data => console.log(data))
    );
  }

  loadGamesInList(gameIds: string[]): Observable<IGameExpanded[]> {
    return this.gameFetcher.getGamesByIds(gameIds);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
