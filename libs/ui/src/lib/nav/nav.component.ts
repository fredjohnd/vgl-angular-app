import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vgl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
