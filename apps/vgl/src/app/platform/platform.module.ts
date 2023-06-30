import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformIndexComponent } from './index/platform-index.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { PlatformSharedModule } from './shared/platform-shared.module';
import { VglImageGalleryModule } from '@vgl/image-gallery';
import { SharedModule } from '../shared/shared.module';
import { ListModalComponent } from '../shared/components/list-modal/list-modal.component';

@NgModule({
  declarations: [
    PlatformIndexComponent,
    GameDetailComponent,
    GameHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlatformSharedModule,
    PlatformRoutingModule,
    VglImageGalleryModule,

    ListModalComponent
  ],
})
export class PlatformModule {}
