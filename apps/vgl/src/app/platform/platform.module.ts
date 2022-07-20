import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformIndexComponent } from './index/platform-index.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameHeaderComponent } from './game-detail/components/game-header/game-header.component';
import { PlatformSharedModule } from './shared/platform-shared.module';

@NgModule({
  declarations: [
    PlatformIndexComponent,
    GameDetailComponent,
    GameHeaderComponent,
  ],
  imports: [CommonModule, PlatformSharedModule, PlatformRoutingModule],
})
export class PlatformModule {}
