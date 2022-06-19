import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformIndexComponent } from './index/platform-index.component';
import { PlatformResolver } from './platform.resolver';

const routes: Routes = [
  { 
    path: ':platformId',
    resolve: {
      platformId: PlatformResolver
    },
    component: PlatformIndexComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
