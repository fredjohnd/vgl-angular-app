import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { IGameExpanded } from '../../shared/interfaces/game.interface';
import { ListProcessorService } from '../../shared/services/list-processor.service';

@Component({
  selector: 'vgl-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetailComponent implements OnInit, OnDestroy {

  protected game$: Observable<IGameExpanded>;

  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private listProcessor: ListProcessorService) {}

  ngOnInit(): void {
    this.game$ = this.route.data.pipe(
      map((data: Data) => data['game']),
      takeUntil(this.destroyed$),
    );
  }

  addToListClick(gameId: string) {
    this.listProcessor.addGameToList("1", gameId).pipe(
      tap(data => console.log(data)
    )).subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
