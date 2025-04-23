import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpendingbusinessPage } from './adminpendingbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpendingbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpendingbusinessPageRoutingModule {}
