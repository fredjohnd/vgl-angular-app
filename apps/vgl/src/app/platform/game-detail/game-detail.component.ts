import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { ListModalComponent } from '../../shared/components/list-modal/list-modal.component';
import { IGameExpanded } from '../../shared/interfaces/game.interface';
import { IList } from '../../shared/interfaces/list.interface';
import { ListFetcherService } from '../../shared/services/list-fetcher.service';
import { ListProcessorService } from '../../shared/services/list-processor.service';

@Component({
  selector: 'vgl-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetailComponent implements OnInit, OnDestroy {

  protected game$: Observable<IGameExpanded>;
  protected ownLists$: Observable<IList[]>;

  private destroyed$ = new Subject<void>();

  @ViewChild('listModal', { read: TemplateRef }) listModal:TemplateRef<ListModalComponent>;
  constructor(
    private route: ActivatedRoute,
    private listFetcher: ListFetcherService,
    private listProcessor: ListProcessorService,
     private dialog: MatDialog) {}

  ngOnInit(): void {
    this.game$ = this.route.data.pipe(
      map((data: Data) => data['game']),
      takeUntil(this.destroyed$),
    );

    this.ownLists$ = this.listFetcher.getOwnLists();
  }

  addToListClick(gameId: string) {
    this.dialog.open(this.listModal, {
      height: '500px',
      width: '300px',

    });
  }

  confirmAddToList(listId: string, gameId: string) {
    this.listProcessor.addGameToList(listId, gameId).pipe(
      tap(data => console.log(data)
    )).subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
