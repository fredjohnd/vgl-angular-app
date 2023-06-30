import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  // Root/Index Route
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },

  // Platform Route
  { path: 'platform', loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule) },

  // List module
  { path: 'lists', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
