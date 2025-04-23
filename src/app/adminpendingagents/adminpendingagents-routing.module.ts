import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpendingagentsPage } from './adminpendingagents.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpendingagentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpendingagentsPageRoutingModule {}
