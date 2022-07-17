import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PlatformIndexComponent } from './index/platform-index.component';
import { PlatformResolver } from './platform.resolver';

const routes: Routes = [
  {
    path: ':slug',
    pathMatch: 'full',
    resolve: {
      platform: PlatformResolver
    },
    component: PlatformIndexComponent,
    children: [
        {
          path: ':gameId',
          component: GameDetailComponent
        }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
