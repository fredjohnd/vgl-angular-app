import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';
import { PlatformResolver } from './platform.resolver';

const routes: Routes = [
  { 
    path: ':platformId',
    resolve: {
      platformId: PlatformResolver
    },
    component: PlatformComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
