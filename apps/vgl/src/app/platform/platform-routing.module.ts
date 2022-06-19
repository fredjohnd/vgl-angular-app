import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PlatformIndexComponent } from './index/platform-index.component';
import { PlatformResolver } from './platform.resolver';

const routes: Routes = [
  {
    path: ':platformId',
    pathMatch: 'full',
    resolve: {
      platformId: PlatformResolver
    },
    component: PlatformIndexComponent,
  },
  {
    path: ':platformId/:gameId',
    pathMatch: 'full',
    component: GameDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
