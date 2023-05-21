import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmemberlistPage } from './viewmemberlist.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmemberlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmemberlistPageRoutingModule {}
