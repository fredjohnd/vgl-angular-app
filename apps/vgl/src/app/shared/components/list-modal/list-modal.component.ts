import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IList } from '../../interfaces/list.interface';

@Component({
  selector: 'vgl-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListModalComponent {
  @Input() data: IList[] | null;
}
