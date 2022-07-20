import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformIndexComponent } from './index/platform-index.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { PlatformSharedModule } from './shared/platform-shared.module';
import { VglImageGalleryModule } from '@vgl/image-gallery';

@NgModule({
  declarations: [
    PlatformIndexComponent,
    GameDetailComponent,
    GameHeaderComponent,
  ],
  imports: [
    CommonModule,
    PlatformSharedModule,
    PlatformRoutingModule,
    VglImageGalleryModule
  ],
})
export class PlatformModule {}
