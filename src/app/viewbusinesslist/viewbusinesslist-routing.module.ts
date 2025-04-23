import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbusinesslistPage } from './viewbusinesslist.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbusinesslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbusinesslistPageRoutingModule {}
