import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpayoutsettingPage } from './adminpayoutsetting.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpayoutsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpayoutsettingPageRoutingModule {}
