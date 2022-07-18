import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IGame } from '../../shared/interfaces/game.interface';

@Component({
  selector: 'vgl-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetailComponent implements OnInit {

  protected game$: Observable<IGame>;

  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.game$ = this.route.data.pipe(
      map((data: Data) => data['game']),
      takeUntil(this.destroyed$),
    );
  }
}
