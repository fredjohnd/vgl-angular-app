import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListIndexComponent } from './components/list-index/list-index.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListIndexComponent, ListDetailComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule],
})
export class ListModule {}
