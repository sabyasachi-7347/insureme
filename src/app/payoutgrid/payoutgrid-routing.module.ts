import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutgridPage } from './payoutgrid.page';

const routes: Routes = [
  {
    path: '',
    component: PayoutgridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutgridPageRoutingModule {}
