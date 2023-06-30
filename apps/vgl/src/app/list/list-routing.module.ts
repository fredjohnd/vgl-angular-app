import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { ListIndexComponent } from './components/list-index/list-index.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListIndexComponent
  },
  {
    path: ':slug',
    pathMatch: 'full',
    component: ListDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
