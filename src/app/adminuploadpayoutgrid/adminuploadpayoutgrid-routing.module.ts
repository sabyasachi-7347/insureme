import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminuploadpayoutgridPage } from './adminuploadpayoutgrid.page';

const routes: Routes = [
  {
    path: '',
    component: AdminuploadpayoutgridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminuploadpayoutgridPageRoutingModule {}
