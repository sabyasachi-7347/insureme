import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminmonthlypayoutsPage } from './adminmonthlypayouts.page';

const routes: Routes = [
  {
    path: '',
    component: AdminmonthlypayoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminmonthlypayoutsPageRoutingModule {}
