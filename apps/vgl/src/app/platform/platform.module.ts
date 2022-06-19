import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlatformIndexComponent } from './index/platform-index.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [PlatformIndexComponent, GameDetailComponent],
  imports: [CommonModule, SharedModule, PlatformRoutingModule],
})
export class PlatformModule {}
