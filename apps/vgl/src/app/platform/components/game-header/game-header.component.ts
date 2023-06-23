import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IGameExpanded } from '../../../shared/interfaces';

@Component({
  selector: 'vgl-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHeaderComponent {

  @Input() game: IGameExpanded;
  @Output() addToList = new EventEmitter();
}
