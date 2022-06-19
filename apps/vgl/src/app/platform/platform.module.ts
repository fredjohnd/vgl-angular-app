import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlatformIndexComponent } from './index/platform-index.component';

@NgModule({
  declarations: [PlatformIndexComponent],
  imports: [CommonModule, SharedModule, PlatformRoutingModule],
})
export class PlatformModule {}
