import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { IList } from '../../interfaces/list.interface';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'vgl-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class ListModalComponent implements OnInit {
  @Input() data: IList[] | null;
  @Input() selected: string[] = ["1"];

  @Output() confirm: EventEmitter<string[]> = new EventEmitter();
  @Output() cancel: EventEmitter<null> = new EventEmitter();

  _selection: {[key: string]: boolean} = {};

  ngOnInit() {
    this._selection = this.selected.reduce((memo: {[key: string]: boolean}, key: string) => {
      memo[key] = true;
      return memo;
    }, {});
  }

  onListToggle(id: string) {
      this._selection = {...this._selection, [id]: !this._selection[id]}
  }

}
