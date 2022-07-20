import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGame } from '../../../shared/interfaces';

@Component({
  selector: 'vgl-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHeaderComponent {

  @Input() game: IGame;
}
