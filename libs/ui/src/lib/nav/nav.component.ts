import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'vgl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {

  /**
   * Theme color palette for the component 
   */
  @Input() color: ThemePalette;

}
