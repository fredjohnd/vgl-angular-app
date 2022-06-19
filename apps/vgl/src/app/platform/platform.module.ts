import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlatformComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
